import React, { useCallback, useMemo, useState } from 'react'
import Select from 'react-select'
import cc from 'classcat'
import styled from '../../../../lib/styled'

export interface FormSelectOption {
  label: string | React.ReactNode
  value: string
}

interface FormSelectCommonProps {
  id?: string
  closeMenuOnSelect?: boolean
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isMulti?: boolean
  isSearchable?: boolean
  name?: string
  filterOption?: (option: FormSelectOption, rawInput: string) => boolean
  onMenuOpen?: () => void
}

interface StandardFormSelectOptions {
  value?: FormSelectOption
  options: FormSelectOption[]
  onChange: (val: any) => void
}

interface SimpleFormSelectOptions {
  value: string
  options: readonly string[]
  onChange: (val: string) => void
}

export type FormSelectProps = FormSelectCommonProps & StandardFormSelectOptions

const FormSelect = ({
  id,
  options,
  value,
  onChange,
  closeMenuOnSelect = true,
  className,
  isDisabled = false,
  isLoading = false,
  isMulti = false,
  isSearchable = false,
  name,
  filterOption,
  onMenuOpen,
}: FormSelectProps & StandardFormSelectOptions) => {
  const [focused, setFocused] = useState(false)
  return (
    <Container>
      <Select
        id={id}
        closeMenuOnSelect={closeMenuOnSelect}
        options={options}
        className={cc([
          className,
          'form__select',
          focused && 'form__select--focused',
          isDisabled && 'form__select--disabled',
        ])}
        classNamePrefix={'form__select'}
        value={value}
        filterOption={filterOption}
        onChange={onChange}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isSearchable={isSearchable}
        isMulti={isMulti}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMenuOpen={onMenuOpen}
      />
    </Container>
  )
}

export type SimpleFormSelectProps = FormSelectCommonProps &
  SimpleFormSelectOptions
export const SimpleFormSelect = ({
  options,
  value,
  onChange,
  ...props
}: SimpleFormSelectProps) => {
  const convertedOptions = useMemo(() => {
    return options.map((opt) => {
      return {
        label: opt,
        value: opt,
      }
    })
  }, [options])

  const onSelectChange = useCallback(
    (val: FormSelectOption) => {
      onChange(val.value)
    },
    [onChange]
  )

  return (
    <FormSelect
      {...props}
      options={convertedOptions}
      value={value != null ? { label: value, value: value } : undefined}
      onChange={onSelectChange}
    />
  )
}

const Container = styled.div`
  .form__select .form__select__indicator-separator {
    width: 0;
  }

  .form__select .form__select__control,
  .form__select .form__select__indicator,
  .form__select .form__select__indicators {
    height: 32px;
    min-height: 32px;
  }

  .form__select .form__select__control {
    width: 100%;
    color: ${({ theme }) => theme.colors.text.subtle};
    border: none;
    &.form__select__control--is-focused {
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .form__select .form__select__input {
    opacity: inherit;
    color: ${({ theme }) => theme.colors.text.primary};
    &.form__select__input--is-disabled {
      opacity: 0.6;
    }
    input {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }

  .form__select .form__select__single-value,
  .form__select .form__select__value-container,
  .form__select .form__select__dropdown-indicator,
  .form__select .form__select__multi-value__label,
  .form__select .form__select__multi-value__remove {
    color: ${({ theme }) => theme.colors.text.subtle};
  }

  .form__select .form__select__multi-value {
    border: 1px solid ${({ theme }) => theme.colors.border.main};
    border-radius: ${({ theme }) => theme.borders.radius}px;
  }

  .form__select .form__select__multi-value__remove:hover {
    color: ${({ theme }) => theme.colors.variants.primary.text};
    background-color: ${({ theme }) => theme.colors.variants.primary.base};
  }

  .form__select .form__select__multi-value,
  .form__select .form__select__control {
    background-color: ${({ theme }) => theme.colors.background.primary};
  }

  .form__select .form__select__control {
    border: 1px solid ${({ theme }) => theme.colors.border.main};
  }

  .form__select .form__select__menu {
    background-color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.main};
    overflow-y: visible !important;
  }

  .form__select .form__select__option {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: default;
    &.form__select__option--is-disabled {
      color: ${({ theme }) => theme.colors.text.subtle};
      cursor: not-allowed;
    }

    &.form__select__option--is-selected,
    &:active:not(.form__select__option--is-disabled) {
      background-color: ${({ theme }) => theme.colors.variants.primary.base};
      color: ${({ theme }) => theme.colors.variants.primary.text};
    }

    &.form__select__option--is-focused {
      transition: 0.2s;
      color: ${({ theme }) => theme.colors.text.primary};
      background-color: ${({ theme }) => theme.colors.background.tertiary};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.quaternary};
      transition: 0.2s;
    }
  }
`

export default FormSelect
