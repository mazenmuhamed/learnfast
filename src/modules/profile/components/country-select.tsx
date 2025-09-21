'use client'

import { memo, useMemo } from 'react'

import { countries } from '../data'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const CountrySelect = memo(
  ({
    value,
    onChange,
  }: {
    value?: string
    onChange?: (val: string) => void
  }) => {
    const data = useMemo(() => countries, [])

    return (
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a country..." />
        </SelectTrigger>
        <SelectContent className="max-h-60 rounded-lg">
          {data.map(country => (
            <SelectItem
              key={country.code}
              value={country.label}
              className="rounded-lg"
            >
              <span className={`fi fi-${country.code.toLowerCase()}`}></span>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
)

CountrySelect.displayName = 'CountrySelect'
