// eslint-disable-next-line no-unused-vars
import React from 'react'

const FormatCurrency = (value,currency) => {
  // eslint-disable-next-line no-undef
  return value.tolocaleString('pt-br', {style: 'currency', currency })
}

export default FormatCurrency
