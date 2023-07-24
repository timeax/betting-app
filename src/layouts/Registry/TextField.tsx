import React from 'react'

const TextField: React.FC<Props> = ({ value, icon, placeholder, className, type, onChange }) => {
    return (
        <div className={`custom-textfield ${className}`}>
            <div className="icon">
                {icon}
            </div>
            <input onChange={(e) => onChange?.(e.target.value)} type={type} placeholder={placeholder} defaultValue={value} />
        </div>
    )
}


interface Props {
    placeholder: string;
    value?: string;
    icon: React.ReactElement;
    className?: string;
    onChange?: Function;
    type?: 'text' | 'number'
}

TextField.defaultProps = {
    type: 'text',
    className: '',
    value: '',
    onChange(e: any) {
        return e.target.value
    },
    placeholder: 'Enter value'
}


export default TextField