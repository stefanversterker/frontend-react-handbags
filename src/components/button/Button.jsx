function Button({buttonText, isDisabled}) {
    return (
        <button
            type="button"
            disabled={isDisabled}
        >
                {buttonText}
        </button>
    )
}

export default Button;


