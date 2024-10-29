export default function Tab({children , buttons , buttonContainer}){
    const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>

    )
    
}