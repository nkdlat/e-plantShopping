import React, { useState } from 'react';
import './ProductList.css'; 
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", d
