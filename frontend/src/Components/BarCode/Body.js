import React from 'react';
import { useBarcode } from 'next-barcode';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

export const Body = ({ product, currency, marketName, isShowPrice }) => {
    const { inputRef } = useBarcode({
        value: product?.productdata?.barcode,
        options: {
            background: '#fff',
            width: '2cm',
            height: '30cm',
        },
    });

    const { currency: currencyEx } = useSelector((state) => state.currency);

    return (
        <div className='page'>
            <div className='label w-[58mm]  h-[26mm]   rotate-90 flex items-center'>
                <div className='h-[30mm] w-[45mm] flex flex-wrap justify-between'>
                    <span className='text-start font-bold text-[14px]'>
                        <span className='text-[10px]'>{t('Kod')}</span>: {product.category && product.category.code}{' '}
                        {product.productdata && product.productdata.code}
                    </span>
                    <span className='text-center w-full leading-[1.1] text-[14px]'>
                        {product.productdata && product.productdata.name}
                    </span>

                    {isShowPrice && (
                        <div className='text-[20px] w-full font-bold text-center'>
                            <span>
                                {(product.price &&
                                    (currency === 'UZS'
                                        ? product.price.sellingpriceuzs.toLocaleString('ru-RU')
                                        : product.price.sellingprice.toLocaleString('ru-RU')) +
                                    ' ' +
                                    currency) ||
                                    ''}
                            </span>
                        </div>
                    )}
                </div>
                <div className='-rotate-90 absolute end-[-35px]'>
                    <canvas className='w-[30mm] ' ref={inputRef} /> 
                </div>
            </div>
           
        </div>
    );
};
