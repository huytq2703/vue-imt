export const formatURLParams = obj => {
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      // eslint-disable-next-line no-param-reassign
      delete obj[propName]
    }
  }
  return obj
}

export const capitalizeFirstLetter = string => {
  if (string) {
    const sentence = string.toLowerCase()
    const titleCaseSentence = sentence.replace(/^[a-zA-Z]/, string[0].toUpperCase())
    return titleCaseSentence
  }
  return string
}

export const getNow = () => {
  const date = moment().format('DD/MM/YYYY')
  const time = moment().format('LT')
  const dateTime = `${date} lúc ${time}`
  return dateTime
}

export const getCurrentTime = () => {
  const date = moment().format('DD/MM/YYYY')
  const time = moment().format('LT')
  const dateTime = `${date} ${time}`
  return dateTime
}

export const isEmpty = value => value === undefined || value === '' || value === null

export const onlyNumberInput = e => {
  const char = String.fromCharCode(e.keyCode)
  if (/[0-9]+/.test(char)) {
    return true
  }
  return e.preventDefault()
}
export const preventPasteSpecialChars = value => value.replace(/[^0-9]/gi, '')

export const onlyDateInput = e => {
  const char = String.fromCharCode(e.keyCode)
  if (/[0-9/]+/.test(char)) {
    return true
  }
  return e.preventDefault()
}

export const formatSortUrl = args => {
  let url = ''
  if (args.sort !== undefined && args.sort !== null && typeof (args.sort) !== 'string') {
    url = args.sort.reduce((prev, curr) => {
      if (prev.field) {
        return `?sort=${prev.field},${prev.type}&sort=${curr.field},${curr.type}`
      }
      return `${prev}&sort=${curr.field},${curr.type}`
    })
  }
  return url
}

export const sortFilterParams = args => {
  if (args.sort !== null && typeof (args.sort) !== 'string') {
    const filtered = Object.keys(args)
      .filter(key => key !== 'sort')
      .reduce((obj, key) => ({
        ...obj,
        [key]: args[key],
      }), {})
    return filtered
  }
  return args
}

// Thông báo lỗi
export const notificationResponseMessage = (statusCode, message) => {
  let responseMessage = ''
  if (statusCode) {
    switch (statusCode) {
      case 200:
        responseMessage = 'Ok'
        break
      case 201:
        responseMessage = 'Cập nhật thành công'
        break
      case 400:
        responseMessage = 'Yêu cầu không đúng định dạng'
        break
      case 401:
        responseMessage = 'Không được phép truy cập'
        break
      case 404:
        responseMessage = 'Không tìm thấy dữ liệu'
        break
      case 500:
        responseMessage = 'Không thực hiện được yêu cầu'
        break
      case 501:
        responseMessage = 'Không xác định được yêu cầu từ máy khách hàng'
        break
      case 504:
        responseMessage = 'Vượt quá thời gian yêu cầu'
        break
      case 2002:
        responseMessage = 'Hệ thống bị lỗi.'
        break
      case 6010:
        responseMessage = 'Token quên mật khẩu đã hết hạn'
        break
      case 5003:
        responseMessage = 'Hệ thống bị lỗi'
        break
      default:
        responseMessage = message
    }
  } else {
    responseMessage = 'Không kết nối được với server.'
  }

  return responseMessage
}
