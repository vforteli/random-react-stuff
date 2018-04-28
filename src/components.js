import React, { Component } from 'react';

export const ButtonLoading = ({ loading: Loading, value: Value, ...rest }) => <button {...rest} disabled={Loading}> {Loading && <span><i className="fas fa-circle-notch fa-spin"></i></span>} {Value}</ button>;