import React from 'react';
import {Button, Icon} from '@material-ui/core';

const PurchaseButton = () => {
    return (
        <Button component="a"
                href="https://imgforge.com"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
            <Icon className="text-16 mr-4">shopping_cart</Icon>
            <span>Developed by imgforge</span>
        </Button>
    );
};

export default PurchaseButton;
