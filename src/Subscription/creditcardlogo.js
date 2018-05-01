import React from 'react';


export const CreditCardLogo = props => <img alt='cclogo' className='cclogo' src='/Content/img/mastercard.svg' />


//app.directive('creditCardLogoSrc', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attr) {
//            scope.$watch(attr.creditCardLogoSrc, function (newVal, oldVal) {
//                if (newVal === 'Visa') {
//                    element.attr('src', '/Content/img/visa.svg');
//                }
//                if (newVal === 'MasterCard') {
//                    element.attr('src', '/Content/img/mastercard.svg');
//                }
//                if (newVal === 'American Express') {
//                    element.attr('src', '/Content/img/amex.svg');
//                }
//            });
//        }
//    };
//});

//let src = '';
//if (props.cardype === 'Visa')
//    src = '/Content/img/visa.svg';
//else if (props.cardype === 'MasterCard')
//    src = '/Content/img/mastercard.svg';
//else if (props.cardype === 'American Express')
//    src = '/Content/img/amex.svg';