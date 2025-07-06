import React, { useState, useEffect } from 'react';
import './mainpage.css'; // Import the CSS file

//pics
import anyaPicANIME from '../assets/anyaANIME.png';
import erenPicANIME from '../assets/erenANIME.png';
import saiilorPicANIME from '../assets/sailorANIME.png';
import gojoPicANIME from '../assets/gojoANIME.png';
import narutoPicANIME from '../assets/narutoANIME.png';
import penguinANIMAL from '../assets/penguinANIMAL.png';
import hedgehodANIMAL from '../assets/porkyANIMAL.png';
import teaANIMAL from '../assets/teaANIMAL.png';
import llamaANIMAL from '../assets/llamaANIMAL.png';
import beeANIMAL from '../assets/beeANIMAL.png';


export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [products] = useState([
        { id: 1, name: 'Anya Happy', artist: 'AniMade', price: 25.00, image: anyaPicANIME, availableAs: ['poster', 'sticker'], description: 'Anya from SpyxFamily.', category: 'anime' },
        { id: 2, name: 'Eren Angry', artist: 'AniMade', price: 15.00, image: erenPicANIME, availableAs: ['sticker'], description: 'Eren Yaeger from Attack on Titan.', category: 'anime' },
        { id: 3, name: 'Sailor Happy', artist: 'AniMade', price: 30.00, image: saiilorPicANIME, availableAs: ['poster'], description: 'Sailor Moon, but slay.', category: 'anime' },
        { id: 4, name: 'Gojo Chibi', artist: 'AniMade', price: 20.00, image: gojoPicANIME, availableAs: ['poster', 'sticker'], description: 'Gojo from JJK.', category: 'anime' },
        { id: 5, name: 'Naruto', artist: 'AniMade', price: 22.00, image: narutoPicANIME, availableAs: ['poster', 'sticker'], description: 'Naruto from Naruto.', category: 'anime' },
        
        { id: 6, name: 'Cozy Penguin', artist: 'AnimalLover', price: 5.00, image: penguinANIMAL, availableAs: ['sticker'], description: 'Penguin cozying up in igloo.', category: 'animals' },
        { id: 7, name: 'Cozy Hedgehog', artist: 'AnimalLover', price: 12.00, image: hedgehodANIMAL, availableAs: ['poster'], description: 'Hedgehog sleeping.', category: 'animals' },
        { id: 8, name: 'Tea Party', artist: 'AnimalLover', price: 17.00, image: teaANIMAL, availableAs: ['sticker'], description: '3 Animals having a tea party.', category: 'animals' },
        { id: 9, name: 'Calm Llama', artist: 'AnimalLover', price: 30.00, image: llamaANIMAL, availableAs: ['sticker','poster'], description: 'Llama Meditating.', category: 'animals' },
        { id: 10, name: 'Chill Bee', artist: 'AnimalLover', price: 18.00, image: beeANIMAL, availableAs: ['sticker'], description: 'A bee with sunglasses.', category: 'animals' },

        
    ]);
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [notification, setNotification] = useState('');

    //show notification
    function showNotification(message){
        setNotification(message);
        setTimeout(() => setNotification(''), 3000);
    }

    //keeps application to 1 page. helps navigate user
    function navigateTo(page,product = null) {
        setCurrentPage(page);
        setSelectedProduct(product);
    }

    function addToCart(product){
        setCart(cart => [...cart, { ...product, cartId: Date.now() }]);
        showNotification(`${product.name} has been added to your cart!`);
    }

    function removeFromCart(cartId){
        setCart(cart.filter(item => item.cartId !== cartId));
    }

    function renderPage(){
        switch (currentPage) {
            case 'home': return <HomePage navigateTo={navigateTo} products={products} />;
            case 'product': return <ProductPage product={selectedProduct} navigateTo={navigateTo} addToCart={addToCart} />;
            case 'cart': return <CartPage cart={cart} navigateTo={navigateTo} removeFromCart={removeFromCart} />;
            case 'checkout': return <CheckoutPage cart={cart} navigateTo={navigateTo} />;
            case 'survey': return <SurveyPage navigateTo={navigateTo} />;
            default: return <HomePage navigateTo={navigateTo} products={products} />;
        }
    }

    //html part
    return (
        <div className="app-container">
            {notification && <Notification message={notification} />}
            <Header navigateTo={navigateTo} cartCount={cart.length} />

            <main className="container">
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
}

function Notification(message){
    <div className="notification">
        <p>{message}</p>
    </div>
}

function Header(navigateTo,cartCount){
    <header className="header">
        <nav className="container navbar">

            <div className="navbar-brand" onClick={() => navigateTo('home')}>
                Artify
            </div>

            <div className="nav-links">
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('survey'); }}>Survey</a>
                
                <div className="cart-icon">
                    <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); navigateTo('cart'); }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </a>
                </div>
            </div>
        </nav>
    </header>
}

//hompage
function HomePage(props) {
    const products = props.products;

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ poster: false, sticker: false, category: 'all' });
    const [priceLimit, setPriceLimit] = useState(100);
    const [maxPrice, setMaxPrice] = useState(100);

    //check if products exists
    useEffect(() => {
        if (products && products.length > 0) { 
            const max = Math.ceil(Math.max(...products.map(p => p.price)));
            setPriceLimit(max);
            setMaxPrice(max);
        }
    }, [products]);

    //make sure products not undefined before filtering
    useEffect(() => {
        
        if (!products) return; 

        let tempProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.artist.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filters.category !== 'all') tempProducts = tempProducts.filter(p => p.category === filters.category);
        if (filters.poster || filters.sticker) {
            tempProducts = tempProducts.filter(p => {
                const hasPoster = filters.poster && p.availableAs.includes('poster');
                const hasSticker = filters.sticker && p.availableAs.includes('sticker');
                if (filters.poster && filters.sticker) return hasPoster && hasSticker;
                return hasPoster || hasSticker;
            });
        }
        tempProducts = tempProducts.filter(p => p.price <= maxPrice);
        setFilteredProducts(tempProducts);
    }, [searchTerm, filters, maxPrice, products]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    return (
        <div>
            <div className="title-banner">
                <h1>Discover & Buy Unique Art</h1>
                <p>Amazing artwork from talented artists, now available as posters and stickers!</p>
                <p className="promo-text">✨ Summer Sale! Get 20% off on all posters! ✨</p>
            </div>

            <div className="card">
                <h3 className="card-title">Filter Your Search</h3>
                <div className="filter-grid">

                    {/* seach bar */}
                    <div className="filter-item-search">
                        <label For="search-input" className="form-label">Artwork or Artist</label>
                        <input id="search-input" type="text" placeholder="e.g., Cosmic Wolf or Luna Creations" className="form-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    {/* select category */}
                    <div className="filter-item">
                        <label For="category-filter" className="form-label">Category</label>
                        <select id="category-filter" name="category" className="form-select" value={filters.category} onChange={handleFilterChange}>
                            <option value="all">All</option><option value="anime">Anime</option><option value="plants">Plants</option><option value="animals">Animals</option><option value="superheros">Superheros</option>
                        </select>
                    </div>

                    {/* choose wehther its sticker or poster filter */}
                    <div className="filter-item">
                        <label className="form-label">Type</label>
                        <div className="checkbox-group">
                            <label className="checkbox-label"><input type="checkbox" name="poster" checked={filters.poster} onChange={handleFilterChange} />Posters</label>
                            <label className="checkbox-label"><input type="checkbox" name="sticker" checked={filters.sticker} onChange={handleFilterChange} />Stickers</label>
                        </div>
                    </div>

                    {/*price filter */}
                    <div className="filter-item-full">
                        <label For="price-range" className="form-label">Price Range: <span>${maxPrice}</span></label>
                        <input id="price-range" type="range" min="0" max={priceLimit} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="form-range" />
                    </div>
                </div>
            </div>

            {/* list of products */}
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="card product-card" onClick={() => props.navigateTo('product', product)}>
                        <div className="product-card-img-container"><img src={product.image} className="product-card-img" alt={product.name} /></div>
                        <div className="product-card-body">
                            <h2 className="product-card-title">{product.name}</h2>
                            <p className="product-card-artist">by {product.artist}</p>
                            <p className="product-card-price">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

