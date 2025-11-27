function Tile({children, tileImage, altText}) {
    return (
        <>
            {Tile.tileImage && <img src={tileImage} alt={altText}/>}
            {children}
        </>
    )
}



export default Tile;


