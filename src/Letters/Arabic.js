import React from 'react';
import myReactStringReplace from '../Helpers/Streplace';

function Arabic (props) {
    const arabicTxt = props.children;

    const replacedTxt = myReactStringReplace(arabicTxt, props.arabic, (match, i) => (
        <span key={'rp' + i} style={{ color: 'red' }}>{match}</span>
    ));

    console.log(replacedTxt)

    return <span dir='rtl'
                lang='ar'
                className={ props.bold ? "arap-red" : "arapski" }
            >

        { props.arabic ? replacedTxt : props.children }

    </span>
}

export default Arabic;