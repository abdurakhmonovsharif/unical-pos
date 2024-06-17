import React from 'react'
import {useBarcode} from 'next-barcode'
import {useSelector} from 'react-redux'
import {t} from 'i18next'

export const Body = ({product, currency, marketName, isShowPrice}) => {
    const {inputRef} = useBarcode({
        value: product?.productdata?.barcode,
        options: {
            background: '#fff',
            width: '2cm',
            height: '30cm',
        },
    })
    const {currency: currencyEx} = useSelector((state) => state.currency)
    return (
        <div className='w-[58mm]  h-[30mm]  mt-[100px] rotate-90 flex items-center'>
            <div className='h-[30mm] flex  flex-wrap justify-between'>
                <span className='text-start font-bold w-[50mm] text-[10px] '>
                    {t('Kodi')}: {product.category && product.category.code}{' '}
                    {product.productdata && product.productdata.code}
                </span>
                <span className='text-center w-full leading-[1.1]  text-[14px]'>
                    {product.productdata && product.productdata.name}
                </span>

                {isShowPrice && (
                    <div className='text-[18px] w-full font-bold text-center '>
                        <span>
                            {(product.price &&
                                (currency === 'UZS'
                                    ? product.price.sellingpriceuzs.toLocaleString(
                                          'ru-RU'
                                      )
                                    : product.price.sellingprice.toLocaleString(
                                          'ru-RU'
                                      )) +
                                    ' ' +
                                    currency) ||
                                ''}
                        </span>
                    </div>
                )}
            </div>
            <div className='-rotate-90  '>
                <canvas className="w-[30mm] mt-[-65px]" ref={inputRef} />
            </div>
        </div>
    )
}
