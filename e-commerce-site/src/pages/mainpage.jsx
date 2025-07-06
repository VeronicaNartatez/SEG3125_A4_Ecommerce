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
import greenMEME from '../assets/greenhairMEME.png';
import saitamaMEME from '../assets/saitamaMEME.png';
import leviMEME from '../assets/leviMEME.png';
import animeMEME from '../assets/animeMEME.png';
import dekuMEME from '../assets/dekuMEME.png';
import succulentPLANT from '../assets/succulentPLANT.png';
import cactusPLANT from '../assets/cacPLANT.png';
import hangPLANT from '../assets/hangPLANT.png';
import mushroomPLANT from '../assets/mushroomPLANT.png';
import lilguyPLANT from '../assets/lilguyPLANT.png';


import milesMARVEL from '../assets/milesMARVEL.png';
import captainamericaMARVEL from '../assets/captainamericaMARVEL.png';
import purechaosMARVEL from '../assets/purechaosMARVEL.png';
import spidermanMARVEL from '../assets/spidermanMARVEL.png';
import thorMARVEL from '../assets/thorMARVEL.png';


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

        { id: 11, name: 'Green Hair OC', artist: 'Gary Uzumaki', price: 14.00, image: greenMEME, availableAs: ['sticker'], description: 'Original Character with green hair.', category: 'anime' },
        { id: 12, name: 'Egg Man', artist: 'Gary Uzumaki', price: 8.00, image: saitamaMEME, availableAs: ['poster'], description: 'Saitama with eggs and explosion.', category: 'anime' },
        { id: 13, name: 'Levi The Cleaner', artist: 'Gary Uzumaki', price: 9.00, image: leviMEME, availableAs: ['poster'], description: 'Levi from Attack on Titan aggressively cleaning.', category: 'anime' },
        { id: 14, name: 'Original Character', artist: 'Gary Uzumaki', price: 30.00, image: animeMEME, availableAs: ['sticker'], description: 'Original Character, Greg.', category: 'anime' },
        { id: 15, name: 'Deku Work Meme', artist: 'Gary Uzumaki', price: 20.00, image: dekuMEME, availableAs: ['sticker','poster'], description: 'Deku from My Hero Academia working on assignment.', category: 'anime' },
 
 
        { id: 16, name: 'Cute Succulent', artist: 'Botanic Artist', price: 17.00, image: succulentPLANT, availableAs: ['poster'], description: 'Cartoon Succulent.', category: 'plant' },
        { id: 17, name: 'Cute Cactus', artist: 'Botanic Artist', price: 10.00, image: cactusPLANT, availableAs: ['poster'], description: 'Cartoon Cactus.', category: 'plant' },
        { id: 18, name: 'Cute Hanging Plant', artist: 'Botanic Artist', price: 30.00, image: hangPLANT, availableAs: ['sticker'], description: 'Cartoon hanging plant.', category: 'plant' },
        { id: 19, name: 'Mushroom Party', artist: 'Botanic Artist', price: 4.00, image: mushroomPLANT, availableAs: ['sticker'], description: 'Personified mushrooms have a party.', category: 'plant' },
        { id: 20, name: 'Hidden Friend', artist: 'Botanic Artist', price: 3.00, image: lilguyPLANT, availableAs: ['sticker','poster'], description: 'An original charcter hidden in a plant.', category: 'plant' },
 
 
        { id: 21, name: 'Miles Morales Jump', artist: 'MarvelIsBetter', price: 20.00, image: milesMARVEL, availableAs: ['sticker','poster'], description: 'Miles Morales Art.', category: 'superheros' },
        { id: 22, name: 'Captain America Art', artist: 'MarvelIsBettert', price: 13.00, image: captainamericaMARVEL, availableAs: ['poster'], description: 'Captain America Art.', category: 'superheros' },
        { id: 23, name: 'PURE CHAOS!', artist: 'MarvelIsBetter', price: 6.00, image: purechaosMARVEL, availableAs: ['sticker'], description: 'PUREEE CHAOOSSS.', category: 'superheros' },
        { id: 24, name: 'Spiderman', artist: 'MarvelIsBetter', price: 20.00, image: spidermanMARVEL, availableAs: ['poster'], description: 'Spiderman jumping towards camera.', category: 'superheros' },
        { id: 25, name: 'Thors Fury', artist: 'MarvelIsBetter', price: 12.00, image: thorMARVEL, availableAs: ['sticker','poster'], description: 'Thor using his hammer.', category: 'superheros' },
 
 
 
    ]);
    
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [notification, setNotification] = useState('');

    //show notification
    function showNotification(message){
        setNotification(message);

        function hideNotification() {
            setNotification('');
        }

        setTimeout(hideNotification, 3000);
    }

    //keeps application to 1 page. helps navigate user
    function navigateTo(page,product = null) {
        setCurrentPage(page);
        setSelectedProduct(product);
    }

    //add item to cart
    function addToCart(product){
        const newItem = {...product, cartID: Date.now()};

        const updateCart=cart.slice();
        updateCart.push(newItem);

        setCart(updateCart);

        showNotification(`${product.name} has been added to your cart!`);
    }

    //remove item from cart
    function removeFromCart(cartId){
        const updatedCart = cart.filter(item => item.cartID !== cartId);
        setCart(updatedCart);
    }

    //clear cart
    function clearCart(){
        setCart([]);
    }

    function renderPage(){
        switch (currentPage) {
            case 'home': return <HomePage navigateTo={navigateTo} products={products} />;
            case 'product': return <ProductPage product={selectedProduct} navigateTo={navigateTo} addToCart={addToCart} />;
            case 'cart': return <CartPage cart={cart} navigateTo={navigateTo} removeFromCart={removeFromCart} />;
            case 'checkout': return <CheckoutPage cart={cart} navigateTo={navigateTo} clearCart={clearCart} />;
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

function Notification({message}){
    return(
        <div className="notification">
            <p>{message}</p>
        </div>
    );
}

function Header({navigateTo,cartCount}){
    return(
        <header className="header">
            <nav className="container navbar">

                <div className="navbar-brand" onClick={() => navigateTo('home')}>
                    Blue Bubble
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
    );
}

//homepage
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
                        <label htmlFor="search-input" className="form-label">Artwork or Artist</label>
                        <input id="search-input" type="text" placeholder="e.g., Cosmic Wolf or Luna Creations" className="form-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
 
 
                    {/* select category */}
                    <div className="filter-item">
                        <label htmlFor="category-filter" className="form-label">Category</label>
                        <select id="category-filter" name="category" className="form-select" value={filters.category} onChange={handleFilterChange}>
                            <option value="all">All</option><option value="anime">Anime</option><option value="plant">Plants</option><option value="animals">Animals</option><option value="superheros">Superheros</option>
                        </select>
                    </div>
 
 
                    {/* choose wehther its sticker or poster filter */}
                    <div className="filter-item">
                        <label className="form-label">Type</label>
                        <div className="checkbox-group">
                            <label className="form-checkbox-label"><input type="checkbox" name="poster" checked={filters.poster} onChange={handleFilterChange} />Posters</label>
                            <label className="form-checkbox-label"><input type="checkbox" name="sticker" checked={filters.sticker} onChange={handleFilterChange} />Stickers</label>
                        </div>
                    </div>
 
 
                    {/*price filter */}
                    <div className="filter-item-full">
                        <label htmlFor="price-range" className="form-label">Price Range: <span className="price-display">${maxPrice}</span></label>
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
 

//shows the item when user clicks on it page
function ProductPage(props) {

    const product = props.product;
    const [selectedFormat, setSelectedFormat] = useState(product.availableAs[0]);
    const [quantity, setQuantity] = useState(1);

    function handleAddToCartClick() {
        props.addToCart({ 
            ...product, 
            selectedFormat: selectedFormat, 
            quantity: quantity, 
            price: product.price 
        });
    }

    function handleFormatChange(event) {
        setSelectedFormat(event.target.value);
    }

    function handleQuantityChange(event) {
        const newQuantity = Math.max(1, parseInt(event.target.value, 10) || 1);
        setQuantity(newQuantity);
    }
    
    //runs when the 'back to products' button is clicked
    function handleBackClick() {
        props.navigateTo('home');
    }

    //html part
    return (
        <div>
            <button onClick={handleBackClick} className="btn btn-back-products">
                &larr; Back to Products
            </button>
            
            <div className="card product-page-card mt-4">
                <div className="product-page-layout">

                    {/* product pic */}
                    <div className="product-page-image-container">
                        <img src={product.image} alt={product.name} className="product-page-image" />
                    </div>
                    
                    {/* product info */}
                    <div className="product-page-details">
                        <h1 className="product-page-title">{product.name}</h1>
                        <p className="product-page-artist">by {product.artist}</p>
                        <p className="product-page-description">{product.description}</p>
                        <p className="product-page-price">${product.price.toFixed(2)}</p>
                        
                        {/* user chose if they want sticker or poster */}
                        <div className="mb-4">
                            <label htmlFor="format" className="form-label">Format:</label>
                            <select id="format" className="form-select" value={selectedFormat} onChange={handleFormatChange}>
                                {product.availableAs.includes('poster') && <option value="poster">Poster</option>}
                                {product.availableAs.includes('sticker') && <option value="sticker">Sticker</option>}
                            </select>
                        </div>
                        
                        {/* chose quantity */}
                        <div className="mb-4">
                            <label htmlFor="quantity" className="form-label">Quantity:</label>
                            <input 
                                type="number" 
                                id="quantity" 
                                className="form-input quantity-input" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                min="1" 
                            />
                        </div>
                        
                        {/* add to cart button */}
                        <button onClick={handleAddToCartClick} className="btn btn-primary w-full mt-8">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

//shows page of users cart
function CartPage(props) {
    const cart = props.cart;
    const navigateTo = props.navigateTo;
    const removeFromCart = props.removeFromCart;
 
 
    //calculate the total price
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
 
 
    function handleContinueShoppingClick() {
        navigateTo('home');
    }
 
 
    function handleCheckoutClick() {
        navigateTo('checkout');
    }
 
 
    //html part
    return (
        <div>
            <button onClick={handleContinueShoppingClick} className="btn btn-secondary mb-4">
                &larr; Continue Shopping
            </button>
 
 
            <div className="card">
                <h1 className="mb-6">Your Shopping Cart</h1>
 
 
                {cart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty. Let's find some art!</p>
                ) : (
                    <div>
                        {cart.map(item => (
                            <div key={item.cartID} className="cart-item">
                                <div className="cart-item-info">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div>
                                        <h2 className="cart-item-name">{item.name}</h2>
                                        <p className="text-gray-600">Format: {item.selectedFormat} | Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="cart-item-actions">
                                    <p className="cart-item-price">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                    <button onClick={() => removeFromCart(item.cartID)} className="btn btn-danger-outline">Remove</button>
                                </div>
                            </div>
                        ))}
 
 
                        <div className="cart-summary">
                            <p className="cart-total">Total: ${total.toFixed(2)}</p>
                            <button onClick={handleCheckoutClick} className="btn btn-primary mt-8">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
 }
 
function CheckoutProgressBar({ currentStep, steps }) {
    const progressPercentage = currentStep > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 0;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-line"></div>
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const stepClass = stepNumber < currentStep ? 'completed' : (stepNumber === currentStep ? 'active' : '');
                return (
                    <div key={label} className={`progress-step ${stepClass}`}>
                        <div className="progress-step-circle">{stepNumber <= currentStep ? '✓' : stepNumber}</div>
                        <p className="progress-step-label">{label}</p>
                    </div>
                );
            })}
        </div>
    );
}

function CheckoutPage({ cart, navigateTo, clearCart }) {
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
    const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', city: '', postalCode: '', country: '' });

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };
    
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setStep(3);
    };

    const handlePlaceOrder = () => {
        clearCart();
        setStep(4); 
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prev => ({ ...prev, [name]: value }));
    };

    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const steps = ['Shipping', 'Payment', 'Confirmation'];

    if (step === 4) {
        return (
            <div className="card checkout-card text-center">
                <h1 className="text-green-600 font-bold mb-4">Order Successful!</h1>
                <p className="text-gray-600 mb-6">Thank you for your purchase. We hope you enjoy your new art!</p>
                <p className="mb-6">We would love to hear your feedback to improve our store.</p>
                <button onClick={() => navigateTo('survey')} className="btn btn-primary w-full">Take a Quick Survey</button>
            </div>
        );
    }

    return (
        <div className="card checkout-card">
            <CheckoutProgressBar currentStep={step} steps={steps} />
            
            {step === 1 && (
                <form onSubmit={handleShippingSubmit}>
                    <h2 className="card-title text-center mb-6">Shipping Information</h2>
                    <div className="mb-4"><label htmlFor="name" className="form-label">Full Name</label><input type="text" id="name" name="name" className="form-input" value={shippingInfo.name} onChange={handleInputChange} required /></div>
                    <div className="mb-4"><label htmlFor="address" className="form-label">Address</label><input type="text" id="address" name="address" className="form-input" value={shippingInfo.address} onChange={handleInputChange} required /></div>
                    <div className="mb-4"><label htmlFor="city" className="form-label">City</label><input type="text" id="city" name="city" className="form-input" value={shippingInfo.city} onChange={handleInputChange} required /></div>
                    <div className="mb-4"><label htmlFor="postalCode" className="form-label">Postal Code</label><input type="text" id="postalCode" name="postalCode" className="form-input" value={shippingInfo.postalCode} onChange={handleInputChange} required /></div>
                    <div className="mb-4"><label htmlFor="country" className="form-label">Country</label><input type="text" id="country" name="country" className="form-input" value={shippingInfo.country} onChange={handleInputChange} required /></div>
                    <div className="checkout-actions">
                        <button type="button" onClick={() => navigateTo('cart')} className="btn btn-secondary">Back to Cart</button>
                        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
                    </div>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handlePaymentSubmit}>
                    <h2 className="card-title text-center mb-6">Payment Details</h2>
                    <div className="mb-4"><label htmlFor="cardName" className="form-label">Name on Card</label><input type="text" id="cardName" name="cardName" className="form-input" required /></div>
                    <div className="mb-4"><label htmlFor="cardNumber" className="form-label">Card Number</label><input type="text" id="cardNumber" name="cardNumber" className="form-input" placeholder="XXXX XXXX XXXX XXXX" required /></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div><label htmlFor="expiryDate" className="form-label">Expiry Date</label><input type="text" id="expiryDate" name="expiryDate" className="form-input" placeholder="MM/YY" required /></div>
                        <div><label htmlFor="cvv" className="form-label">CVV</label><input type="text" id="cvv" name="cvv" className="form-input" placeholder="123" required /></div>
                    </div>
                    <div className="checkout-actions">
                        <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">Back to Shipping</button>
                        <button type="submit" className="btn btn-primary">Review Order</button>
                    </div>
                </form>
            )}

            {step === 3 && (
                <div>
                    <h2 className="card-title text-center mb-6">Confirm Your Order</h2>
                    <div className="card mb-6">
                        <h3 className="font-bold">Shipping to:</h3>
                        <p>{shippingInfo.name}</p>
                        <p>{shippingInfo.address}</p>
                        <p>{shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.country}</p>
                    </div>
                    <div className="card">
                        <h3 className="font-bold mb-4">Order Summary:</h3>
                        {cart.map(item => (
                            <div key={item.cartID} className="cart-item">
                                <div className="cart-item-info">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div><h4 className="cart-item-name">{item.name}</h4><p className="text-gray-600">Qty: {item.quantity}</p></div>
                                </div>
                                <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="cart-summary"><p className="cart-total">Total: ${total.toFixed(2)}</p></div>
                    </div>
                    <div className="checkout-actions mt-8">
                        <button onClick={() => setStep(2)} className="btn btn-secondary">Back to Payment</button>
                        <button onClick={handlePlaceOrder} className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            )}
        </div>
    );
}


function SurveyPage({ navigateTo }) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="card survey-card text-center">
                <h1 className="text-green-600 font-bold mb-4">Thank You!</h1>
                <p className="text-gray-600 mb-6">Your feedback is valuable to us and helps us improve.</p>
                <button onClick={() => navigateTo('home')} className="btn btn-primary w-full">Back to Home</button>
            </div>
        );
    }
    
    return (
        <div className="card survey-card">
            <h1 className="text-center mb-6">Share Your Feedback</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="form-label">How would you rate your overall experience? (1=Poor, 5=Excellent)</label>
                    <div className="flex justify-around p-2">
                        {[1, 2, 3, 4, 5].map(rating => (
                            <label key={rating} className="form-checkbox-label">
                                <input type="radio" name="rating" value={rating} required className="mr-1"/>
                                {rating}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="find-us" className="form-label">How did you find out about Blue Bubble?</label>
                    <select id="find-us" name="find-us" className="form-select" required>
                        <option value="">Select an option</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend">From a friend</option>
                        <option value="search">Search Engine (Google, etc.)</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="comments" className="form-label">Any comments or suggestions?</label>
                    <textarea id="comments" name="comments" rows="4" className="form-input" placeholder="Tell us what you think..."></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-full survey-button">Submit Feedback</button>
                    <button type="button" onClick={() => navigateTo('home')} className="btn-secondary-outline mt-4">Skip</button>
                </div>
            </form>
        </div>
    );
}

//bottom page
function Footer(){
    return(
        <footer className="footer">
            <div className="container text-center text-gray-600">
                <p>&copy; 2025 Blue Bubble. All Rights Reserved.</p>
                <p className="footer-credit">Created for SEG3125 Assignment 4</p>
            </div>
        </footer>
    );
}