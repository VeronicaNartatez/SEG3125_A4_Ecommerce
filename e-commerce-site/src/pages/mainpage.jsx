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
        const updatedCart = [];

        for (let i = 0; i < cart.length; i++) {
            const item=cart[i];

            if(item.cardId !== cardId) {
                updatedCart.push(item);
            }
        }
        setCart(updatedCart);
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
        const newQuantity = Math.max(1, parseInt(event.target.value, 10));
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
            
            <div className="card product-page-card">
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


function CheckoutPage(navigateTo){
    return (
        <div className="card checkout-card">
            <h1 className="text-center mb-4">Checkout</h1>
            <p className="text-center">Checkout functionality would be implemented here.</p>
            <div className="checkout-actions">
                <button onClick={() => navigateTo('cart')} className="btn btn-secondary">Back to Cart</button>
                <button onClick={() => alert('Order Placed!')} className="btn btn-primary">Place Order</button>
            </div>m
        </div>
    );
}

function SurveyPage({navigateTo}){
    return (
        <div className="card survey-card">
            <h1 className="text-center mb-4">Share Your Feedback</h1>
            <p className="text-center">Survey form would be implemented here.</p>
             <button onClick={() => navigateTo('home')} className="btn btn-secondary survey-button">Back to Home</button>
        </div>
    );
}

//bottom page
function Footer(){
    return(
        <footer className="footer">
            <div className="container text-center text-gray-600">
                <p>&copy; 2025 Artify. All Rights Reserved.</p>
                <p className="footer-credit">Created for SEG3125 Assignment 4</p>
            </div>
        </footer>
    );
}
