import {createRemoteComponent} from '@remote-ui/core';

export type PaymentIconSource =
  | 'afterpay'
  | 'airtel_money'
  | 'alipay'
  | 'amazon'
  | 'ambank'
  | 'american_express'
  | 'amex'
  | 'apple_pay'
  | 'arhaus'
  | 'arvato'
  | 'atmbersama'
  | 'bancnet'
  | 'bancontact'
  | 'bitcoin'
  | 'bitcoin_cash'
  | 'bogus'
  | 'boleto'
  | 'cartes_bancaires'
  | 'cash'
  | 'cimb'
  | 'circlek'
  | 'citadele'
  | 'clearpay'
  | 'collector_bank'
  | 'dai'
  | 'dailyyamazaki'
  | 'dankort'
  | 'danske_bank'
  | 'dash'
  | 'diners_club'
  | 'dinersclub'
  | 'discover'
  | 'dnb'
  | 'dogecoin'
  | 'dwolla'
  | 'ebucks'
  | 'eft_secure'
  | 'eghl'
  | 'elo'
  | 'elv'
  | 'enets'
  | 'eos'
  | 'epayments'
  | 'eps'
  | 'esr_paymentslip_switzerland'
  | 'ethereum'
  | 'familymart'
  | 'forbrugsforeningen'
  | 'fpx'
  | 'freecharge'
  | 'generic'
  | 'gift_card'
  | 'giropay'
  | 'google_pay'
  | 'google_wallet'
  | 'grabpay'
  | 'hongleongbank'
  | 'hyper'
  | 'hypercard'
  | 'ideal'
  | 'in3'
  | 'interac'
  | 'jcb'
  | 'jousto'
  | 'klarna_pay_later'
  | 'klarna_pay_now'
  | 'klarna_slice_it'
  | 'klarna'
  | 'krediidipank'
  | 'krungsri'
  | 'laser'
  | 'lawson'
  | 'laybuy'
  | 'lhv'
  | 'litecoin'
  | 'maestro'
  | 'mash'
  | 'master'
  | 'mastercard'
  | 'masterpass'
  | 'maybank'
  | 'ministop'
  | 'mobicred'
  | 'mobikwik'
  | 'mobilepay'
  | 'mondido'
  | 'monero'
  | 'mpesa'
  | 'netbanking'
  | 'nordea'
  | 'ola_money'
  | 'op'
  | 'ovo'
  | 'ozow'
  | 'pagoefectivo'
  | 'payd'
  | 'payfast_instant_eft'
  | 'paymark_online_eftpos'
  | 'paypal'
  | 'paysafecard'
  | 'paysera'
  | 'paytm'
  | 'payzapp'
  | 'pivo'
  | 'prepaysolutions'
  | 'przelew24'
  | 'publicbank'
  | 'qrph'
  | 'ratepay'
  | 'rhbbank'
  | 'rupay'
  | 'santander'
  | 'satispay'
  | 'seb'
  | 'seveneleven'
  | 'sezzle'
  | 'shop_pay'
  | 'siamcommercial'
  | 'sofort'
  | 'splitit'
  | 'spraypay'
  | 'sunkus'
  | 'swedbank'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'ubp'
  | 'unionpay'
  | 'unipay'
  | 'uob'
  | 'usdc'
  | 'v_pay'
  | 'venmo'
  | 'viabill'
  | 'vipps'
  | 'visa'
  | 'visaelectron'
  | 'wechatpay'
  | 'ymobile'
  | 'zip'
  | 'qris'
  | 'sam'
  | 'axs'
  | 'kueskipay'
  | 'farmlands'
  | 'bread'
  | 'nelo'
  | 'vvvGiftcard'
  | 'kunstencultuurcadeaukaart'
  | 'nationalebioscoopbon'
  | 'nationaleentertainmentcard'
  | 'podiumcadeaukaart'
  | 'webshopgiftcard'
  | 'billease'
  | 'affirm'
  | 'payflex'
  | 'kakao_pay'
  | 'flexiti'
  | 'synchrony'
  | 'truemoney_pay'
  | 'gmo_postpay'
  | 'gcash'
  | 'directpay'
  | 'latitudepay'
  | 'genoapay'
  | 'mode'
  | 'atobaraidotcom'
  | 'satisfi'
  | 'checkout_finance'
  | 'echelon_financing'
  | 'acima_leasing'
  | 'synchrony_pay'
  | 'epospay'
  | 'poli'
  | 'pop_pankki'
  | 'aktia'
  | 'saastopankki'
  | 's_pankki'
  | 'walley'
  | 'atone'
  | 'addi'
  | 'omasp'
  | 'handelsbanken'
  | 'alandsbanken'
  | 'siirto'
  | 'line_pay'
  | 'smartpay'
  | 'scalapay'
  | 'snap_checkout'
  | 'paidy'
  | 'solanapay'
  | 'tensile'
  | 'opay'
  | 'maxima'
  | 'alfamidi'
  | 'dandan'
  | 'gopay'
  | 'octoclicks'
  | 'brimo'
  | 'danamononline'
  | 'bcaklikpay'
  | 'akulaku'
  | 'generalfinancing'
  | 'lku'
  | 'n26'
  | 'siauliubankas'
  | 'perlasfinance'
  | 'revolut'
  | 'paybylink'
  | 'sveaeramaksu'
  | 'sveapartpayment'
  | 'sveadelbetalning'
  | 'svealasku'
  | 'sveainvoice'
  | 'sveafaktura'
  | 'sveayrityslasku'
  | 'sveab2binvoice'
  | 'sveab2bfaktura'
  | 'pix'
  | 'wegetfinancing'
  | 'anyday'
  | 'cleverpay'
  | 'payid'
  | 'bnbchain'
  | 'polygon'
  | 'depay'
  | 'divido'
  | 'kakebaraidotcom'
  | 'mayabank'
  | 'upi'
  | 'grailpay'
  | 'payto'
  | 'fortiva'
  | 'fintecture'
  | 'helloclever'
  | 'palawa'
  | 'kredivo'
  | 'bsi'
  | 'fairstonepayments'
  | 'metapay';
export interface PaymentIconProps {
  /**
   * The payment brand's icon to display.
   */
  paymentBrand: PaymentIconSource;
  /**
   * Display the payment icon in a disabled state.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Display the payment icon in a larger size with a box shadow.
   *
   * @defaultValue false
   */
  active?: boolean;
}

export const PaymentIcon = createRemoteComponent<
  'PaymentIcon',
  PaymentIconProps
>('PaymentIcon');