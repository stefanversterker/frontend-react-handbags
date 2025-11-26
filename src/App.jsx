import './App.css'
import Button from './components/button/Button.jsx'
import Product from './components/product/Product.jsx'
import Tile from './components/tile/Tile.jsx'
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonText="to the collection" isDisabled={false}/>
                <Button buttonText="shop all bags" isDisabled={false}/>
                <Button buttonText="pre-orders" isDisabled={true}/>
            </nav>
            <main>
                <Product
                    productLabel={"Best seller"}
                    productImage={bag_1}
                    productAltText="Bag_1"
                    productTitle="The handy bag"
                    productPrice="€400,-"
                />
                <Product
                    productLabel={"Best seller"}
                    productImage={bag_2}
                    productAltText="Bag_2"
                    productTitle="The stylish bag"
                    productPrice="€250,-"
                />
                <Product
                    productLabel={"New collection"}
                    productImage={bag_3}
                    productAltText="Bag_3"
                    productTitle="The simple bag"
                    productPrice="€300,-"
                />
                <Product
                    productLabel={"New collection"}
                    productImage={bag_4}
                    productAltText="Bag_4"
                    productTitle="The trendy bag"
                    productPrice="€150,-"
                />
            </main>
            <footer>
                <section>
                    <Tile>
                        <h3>The Brand</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                        </p>
                        <p>
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </Tile>
                </section>
                <section>
                    <Tile>
                        <img src={brand} alt="Brand image, expensive looking gold and white box with stylized lotus logo"/>
                        </Tile>
                </section>
                <section>
                    <Tile>
                        <img src={our_story} alt="Our Story two women hugging"/>
                    </Tile>
                </section>
                <section>
                    <Tile>
                        <h3>The Brand</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Tile>
                </section>

            </footer>
        </>
)
}

export default App
