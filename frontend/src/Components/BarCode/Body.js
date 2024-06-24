import React from 'react'
import { useBarcode } from 'next-barcode'
import { useSelector } from 'react-redux'
import { t } from 'i18next'

export const Body = ({ product, currency, marketName, isShowPrice }) => {
    const { inputRef } = useBarcode({
        value: product?.productdata?.barcode,
        options: {
            background: '#ffffff',
            width: 2,
            height: 35,
            format: 'CODE128',
            fontOptions: 'bold',
        },
    })
    const { currency: currencyEx } = useSelector((state) => state.currency)
    return (
        <div className='break-after-page font-sans h-[40mm] times'>
            <div className='w-[90mm] rotate-90 !mt-[75px] -ml-[95px] text-xl'>
                {/*<div className='text-[14px] font-medium text-right pb-[10px]'>*/}
                {/*    1$ - {currencyEx} UZS*/}
                {/*</div>*/}
                {/* <div className='text-center w-[auto] font-bold text-2xl p-[3px] pb-3 border border-t-0 border-l-0 border-s-0 border-e-0 border-b-1'>
                    <span>"{marketName}"</span>
                </div> */}
                <div >
                    <div  className='!text-left ml-10 font-normal uppercase underline pb-[2px] -mb-[20px]'>
                        {t('Kod')}: {product.category && product.category.code}{' '}
                        {product.productdata && product.productdata.code}
                    </div>
                    <div className='text-center text-lg p-1'>
                        {/* {t('Nomi')}: */}
                        <br />{' '}
                        <span className='font-semibold text-[23px] leading-[1]'>
                            {product.productdata && product.productdata.name}
                        </span>
                    </div>
                    {isShowPrice && <div className='text-[27px] font-bold text-center p-1'>
                        {/* <span>{product.price ? 'Цена:' : ''}</span>{' '} */}
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
                    </div>}

                    <div className=' mx-auto'>
                        <canvas className='w-[50mm] mx-auto' ref={inputRef} />
                    </div>
                    <div className='flex justify-center p-1'>
                        {/* <svg ref={inputRef} className='h-[23mm] w-[80mm]'  /> */}
                    </div>
                    {/* <div className='flex justify-between text-xl p-1'>
                        <div>
                            {t('Kodi')}: {product.category && product.category.code}{' '}
                            {product.productdata && product.productdata.code}
                        </div>
                        <div>{new Date().toLocaleDateString()}</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
