/**
 * AURA | Haute Gastronomy Digital Menu Application Logic
 */

// Menu Items Dataset
const MENU_ITEMS = [
    {
        id: 'crispy-chicken-burger',
        name: 'Crispy Artisan Chicken Burger',
        category: 'burgers',
        diet: 'non-veg',
        price: 18.50,
        rating: 4.9,
        reviewsCount: 142,
        calories: 680,
        prepTime: '15-20 min',
        isChefSpecial: true,
        isPopular: true,
        isSpicy: true,
        badgeText: "Chef's Special",
        badgeType: 'chef-badge',
        image: 'images/chicken_burger.jpg',
        description: 'Juicy golden fried chicken breast, toasted butter brioche bun, melted aged cheddar cheese, crisp iceberg lettuce, vine tomatoes, and signature smoky house sauce.',
        ingredients: ['Brioche Bun', 'Crispy Chicken', 'Aged Cheddar', 'Smoky Aioli', 'Pickled Onions', 'Crisp Greens'],
        nutrition: {
            protein: '42g',
            carbs: '54g',
            fats: '28g'
        }
    },
    {
        id: 'margherita-pizza',
        name: 'Wood-Fired Margherita Pizza',
        category: 'pizza',
        diet: 'veg',
        price: 21.00,
        rating: 4.8,
        reviewsCount: 198,
        calories: 720,
        prepTime: '12-16 min',
        isChefSpecial: true,
        isPopular: true,
        isSpicy: false,
        badgeText: 'Classic Italian',
        badgeType: 'chef-badge',
        image: 'images/margherita_pizza.jpg',
        description: 'San Marzano D.O.P. tomato coulis, creamy melted Fior di Latte mozzarella, extra virgin olive oil, and freshly picked sweet basil on fermented artisan sourdough crust.',
        ingredients: ['Sourdough Base', 'San Marzano Tomatoes', 'Fior Di Latte', 'Sweet Basil', 'Cold-Pressed EVOO'],
        nutrition: {
            protein: '28g',
            carbs: '82g',
            fats: '22g'
        }
    },
    {
        id: 'creamy-alfredo-pasta',
        name: 'Truffled Fettuccine Alfredo',
        category: 'pasta',
        diet: 'veg',
        price: 24.50,
        rating: 4.9,
        reviewsCount: 164,
        calories: 810,
        prepTime: '14-18 min',
        isChefSpecial: true,
        isPopular: true,
        isSpicy: false,
        badgeText: 'Bestseller',
        badgeType: 'popular-badge',
        image: 'images/alfredo_pasta.jpg',
        description: 'Hand-rolled fresh fettuccine ribbons tossed in a velvety 24-month aged Parmigiano-Reggiano butter emulsion, cracked Tellicherry black pepper, and Italian parsley.',
        ingredients: ['Fresh Fettuccine', 'Parmigiano-Reggiano', 'Cultured Butter', 'Double Cream', 'Tellicherry Pepper'],
        nutrition: {
            protein: '24g',
            carbs: '76g',
            fats: '36g'
        }
    },
    {
        id: 'chocolate-cake',
        name: 'Decadent Dark Fudge Ganache Cake',
        category: 'desserts',
        diet: 'veg',
        price: 14.00,
        rating: 4.95,
        reviewsCount: 230,
        calories: 540,
        prepTime: '5-8 min',
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        badgeText: 'Must Try',
        badgeType: 'popular-badge',
        image: 'images/chocolate_cake.jpg',
        description: 'Triple layered moist Valrhona 70% dark chocolate sponge draped in warm silky chocolate ganache drip and hand-curled Belgian chocolate shavings.',
        ingredients: ['70% Valrhona Cocoa', 'Madagascar Vanilla', 'Espresso Infusion', 'Dark Ganache', 'Sea Salt Flakes'],
        nutrition: {
            protein: '8g',
            carbs: '62g',
            fats: '26g'
        }
    },
    {
        id: 'fresh-lemon-drink',
        name: 'Sparkling Mint Lemonade Cooler',
        category: 'beverages',
        diet: 'veg',
        price: 9.50,
        rating: 4.7,
        reviewsCount: 88,
        calories: 120,
        prepTime: '4-6 min',
        isChefSpecial: false,
        isPopular: false,
        isSpicy: false,
        badgeText: 'Refreshing',
        badgeType: 'veg-badge',
        image: 'images/lemon_drink.jpg',
        description: 'Freshly squeezed Sicilian lemons, organic agave syrup, infused crushed garden mint, and chilled sparkling mineral water over crystalline ice.',
        ingredients: ['Sicilian Lemons', 'Garden Mint', 'Sparkling Water', 'Organic Agave', 'Candied Citrus'],
        nutrition: {
            protein: '1g',
            carbs: '28g',
            fats: '0g'
        }
    },
    {
        id: 'french-fries',
        name: 'Truffle & Rosemary Gourmet Fries',
        category: 'sides',
        diet: 'veg',
        price: 11.50,
        rating: 4.85,
        reviewsCount: 215,
        calories: 410,
        prepTime: '10-12 min',
        isChefSpecial: false,
        isPopular: true,
        isSpicy: false,
        badgeText: 'Crispy Fav',
        badgeType: 'popular-badge',
        image: 'images/french_fries.jpg',
        description: 'Double-cooked hand-cut Russet potatoes tossed in aromatic white truffle oil, Maldon sea salt flakes, and rosemary sprigs, served with garlic herb aioli dip.',
        ingredients: ['Russet Potatoes', 'White Truffle Oil', 'Fresh Rosemary', 'Maldon Flake Salt', 'Garlic Herb Aioli'],
        nutrition: {
            protein: '6g',
            carbs: '52g',
            fats: '18g'
        }
    }
];

// Application State
const state = {
    selectedCategory: 'all',
    selectedDiet: 'all',
    searchQuery: '',
    sortBy: 'featured',
    cart: {} // { [itemId]: quantity }
};

// DOM Element Selectors
const menuGrid = document.getElementById('menuGrid');
const itemCounter = document.getElementById('itemCounter');
const emptyState = document.getElementById('emptyState');
const categoryTabs = document.querySelectorAll('.cat-tab');
const dietButtons = document.querySelectorAll('.diet-btn');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

// Cart Elements
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartCountBadge = document.getElementById('cartCountBadge');
const cartItemsList = document.getElementById('cartItemsList');
const subtotalPrice = document.getElementById('subtotalPrice');
const taxPrice = document.getElementById('taxPrice');
const serviceFee = document.getElementById('serviceFee');
const grandTotalPrice = document.getElementById('grandTotalPrice');
const placeOrderBtn = document.getElementById('placeOrderBtn');

// Modal Elements
const quickViewModal = document.getElementById('quickViewModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContent = document.getElementById('modalContent');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const receiptSummary = document.getElementById('receiptSummary');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Dining selection
const diningPills = document.querySelectorAll('.dining-pill');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
    updateCartUI();
    initMathMotionEngine();
    initCard3DTiltPhysics();
});

// Event Listeners Setup
function setupEventListeners() {
    // Category Tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.selectedCategory = tab.dataset.category;
            renderMenu();
        });
    });

    // Dietary Filter Buttons
    dietButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dietButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedDiet = btn.dataset.diet;
            renderMenu();
        });
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        renderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        renderMenu();
    });

    // Sort Dropdown
    sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderMenu();
    });

    // Reset Filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Cart Drawer Controls
    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Dining pill toggle
    diningPills.forEach(pill => {
        pill.addEventListener('click', () => {
            diningPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // Quick View Modal Close
    closeModalBtn.addEventListener('click', closeQuickView);
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) closeQuickView();
    });

    // Checkout & Order Placement
    placeOrderBtn.addEventListener('click', handlePlaceOrder);
    closeSuccessBtn.addEventListener('click', () => {
        orderSuccessModal.classList.remove('open');
    });

    // Escape key listener for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickView();
            closeCart();
            orderSuccessModal.classList.remove('open');
        }
    });
}

// Filter and Sort Data
function getFilteredItems() {
    return MENU_ITEMS.filter(item => {
        // Category Filter
        const matchesCategory = state.selectedCategory === 'all' || item.category === state.selectedCategory;

        // Dietary Filter
        let matchesDiet = true;
        if (state.selectedDiet === 'veg') matchesDiet = item.diet === 'veg';
        else if (state.selectedDiet === 'non-veg') matchesDiet = item.diet === 'non-veg';
        else if (state.selectedDiet === 'chef') matchesDiet = item.isChefSpecial;
        else if (state.selectedDiet === 'spicy') matchesDiet = item.isSpicy;

        // Search Query
        const matchesSearch = !state.searchQuery || 
            item.name.toLowerCase().includes(state.searchQuery) ||
            item.description.toLowerCase().includes(state.searchQuery) ||
            item.ingredients.some(ing => ing.toLowerCase().includes(state.searchQuery));

        return matchesCategory && matchesDiet && matchesSearch;
    }).sort((a, b) => {
        switch (state.sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            case 'calories': return a.calories - b.calories;
            default: return (b.isChefSpecial ? 1 : 0) - (a.isChefSpecial ? 1 : 0);
        }
    });
}

// Render Menu Cards
function renderMenu() {
    const items = getFilteredItems();
    itemCounter.textContent = items.length;

    if (items.length === 0) {
        menuGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    menuGrid.style.display = 'grid';

    menuGrid.innerHTML = items.map(item => {
        const qty = state.cart[item.id] || 0;
        const dietIcon = item.diet === 'veg' 
            ? '<span class="veg-dot" title="Vegetarian"></span> Veg' 
            : '<span class="nonveg-dot" title="Non-Vegetarian"></span> Non-Veg';

        return `
            <article class="menu-card" data-id="${item.id}">
                <div class="card-glare"></div>
                <div class="card-media-wrap" onclick="openQuickView('${item.id}')">
                    <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
                    <div class="card-badge-container">
                        ${item.badgeText ? `<span class="badge-tag ${item.badgeType}">${item.badgeText}</span>` : ''}
                    </div>
                    <button class="card-quick-view-btn" title="Quick View">
                        <i class="fa-solid fa-expand"></i>
                    </button>
                </div>
                
                <div class="card-content">
                    <div class="card-header-row">
                        <h3 class="card-title" onclick="openQuickView('${item.id}')" style="cursor: pointer;">${item.name}</h3>
                        <div class="card-price">$${item.price.toFixed(2)}</div>
                    </div>

                    <div class="card-meta-row">
                        <div class="card-rating">
                            <i class="fa-solid fa-star"></i>
                            <strong>${item.rating}</strong>
                            <span>(${item.reviewsCount})</span>
                        </div>
                        <div class="card-prep-time">
                            <i class="fa-regular fa-clock"></i>
                            <span>${item.prepTime}</span>
                        </div>
                        <div class="card-calories">
                            <i class="fa-solid fa-fire-flame-curved"></i>
                            <span>${item.calories} kcal</span>
                        </div>
                    </div>

                    <p class="card-desc">${item.description}</p>

                    <div class="card-ingredients">
                        ${item.ingredients.slice(0, 4).map(ing => `<span class="ing-chip">${ing}</span>`).join('')}
                    </div>

                    <div class="card-footer">
                        <div class="diet-indicator">
                            ${dietIcon}
                        </div>

                        <div class="card-action-wrap" id="action-wrap-${item.id}">
                            ${qty === 0 ? `
                                <button class="add-btn" onclick="addToCart('${item.id}', event)">
                                    <i class="fa-solid fa-plus"></i> Add
                                </button>
                            ` : `
                                <div class="card-qty-control">
                                    <button class="qty-btn" onclick="updateQty('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                                    <span class="qty-num">${qty}</span>
                                    <button class="qty-btn" onclick="updateQty('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
    
    // Re-attach 3D tilt listeners to newly created cards
    initCard3DTiltPhysics();
}

// Reset Filters
function resetAllFilters() {
    state.selectedCategory = 'all';
    state.selectedDiet = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';
    
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    sortSelect.value = 'featured';

    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
    dietButtons.forEach(b => b.classList.toggle('active', b.dataset.diet === 'all'));

    renderMenu();
}

// Quick View Modal
window.openQuickView = function(id) {
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item) return;

    modalContent.innerHTML = `
        <div class="modal-grid">
            <div class="modal-media">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="modal-details">
                <div class="modal-header-top">
                    <span class="badge-tag ${item.badgeType}">${item.badgeText || 'Specialty'}</span>
                    <div class="card-rating">
                        <i class="fa-solid fa-star"></i>
                        <strong>${item.rating}</strong> (${item.reviewsCount} reviews)
                    </div>
                </div>
                
                <h3 class="modal-title">${item.name}</h3>
                <div class="modal-price">$${item.price.toFixed(2)}</div>
                <p class="modal-desc">${item.description}</p>
                
                <div class="modal-nutrition-grid">
                    <div class="nutrition-item">
                        <h5>Energy</h5>
                        <p>${item.calories} kcal</p>
                    </div>
                    <div class="nutrition-item">
                        <h5>Protein</h5>
                        <p>${item.nutrition.protein}</p>
                    </div>
                    <div class="nutrition-item">
                        <h5>Carbs</h5>
                        <p>${item.nutrition.carbs}</p>
                    </div>
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <h5 style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-primary); margin-bottom: 0.5rem;">Fresh Ingredients</h5>
                    <div class="card-ingredients">
                        ${item.ingredients.map(ing => `<span class="ing-chip">${ing}</span>`).join('')}
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="modal-add-cart-btn" onclick="addToCart('${item.id}'); closeQuickView();">
                        <i class="fa-solid fa-plus"></i> Add to Table Order ($${item.price.toFixed(2)})
                    </button>
                </div>
            </div>
        </div>
    `;

    quickViewModal.classList.add('open');
};

function closeQuickView() {
    quickViewModal.classList.remove('open');
}

// Cart Operations
window.addToCart = function(id, event) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    const item = MENU_ITEMS.find(i => i.id === id);
    showToast(`Added ${item.name} to order`);
    
    // Spawn mathematical particle burst at click position
    if (event) {
        const x = event.clientX || window.innerWidth / 2;
        const y = event.clientY || window.innerHeight / 2;
        spawnMathParticleBurst(x, y, 28);
    }
    
    updateCartUI();
    renderMenu();
};

window.updateQty = function(id, delta) {
    if (!state.cart[id]) return;
    state.cart[id] += delta;
    if (state.cart[id] <= 0) {
        delete state.cart[id];
    }
    updateCartUI();
    renderMenu();
};

function updateCartUI() {
    const totalItemsCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    cartCountBadge.textContent = totalItemsCount;

    let subtotal = 0;
    const cartEntries = Object.entries(state.cart);

    if (cartEntries.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-bowl-food"></i>
                <p>Your order ticket is empty.</p>
                <small style="color: var(--text-muted)">Select mouth-watering creations from the menu to start.</small>
            </div>
        `;
        placeOrderBtn.disabled = true;
    } else {
        cartItemsList.innerHTML = cartEntries.map(([id, qty]) => {
            const item = MENU_ITEMS.find(i => i.id === id);
            if (!item) return '';
            const itemTotal = item.price * qty;
            subtotal += itemTotal;

            return `
                <div class="cart-item-row">
                    <div class="cart-item-thumb">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="updateQty('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                        <span>${qty}</span>
                        <button onclick="updateQty('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            `;
        }).join('');
        placeOrderBtn.disabled = false;
    }

    // Taxes and Service Fees calculation
    const tax = subtotal * 0.05;
    const service = subtotal > 0 ? subtotal * 0.10 : 0;
    const grandTotal = subtotal + tax + service;

    subtotalPrice.textContent = `$${subtotal.toFixed(2)}`;
    taxPrice.textContent = `$${tax.toFixed(2)}`;
    serviceFee.textContent = `$${service.toFixed(2)}`;
    grandTotalPrice.textContent = `$${grandTotal.toFixed(2)}`;
}

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

// Order Submission
function handlePlaceOrder() {
    const totalItems = Object.values(state.cart).reduce((a, b) => a + b, 0);
    if (totalItems === 0) return;

    let itemsHtml = Object.entries(state.cart).map(([id, qty]) => {
        const item = MENU_ITEMS.find(i => i.id === id);
        return `
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.4rem;">
                <span>${qty}x ${item.name}</span>
                <strong>$${(item.price * qty).toFixed(2)}</strong>
            </div>
        `;
    }).join('');

    const totalVal = grandTotalPrice.textContent;

    receiptSummary.innerHTML = `
        <div style="font-size: 0.8rem; color: var(--gold-primary); text-transform: uppercase; margin-bottom: 0.5rem; font-weight: 700;">
            Ticket #AURA-${Math.floor(1000 + Math.random() * 9000)}
        </div>
        ${itemsHtml}
        <div style="border-top: 1px dashed rgba(255,255,255,0.2); margin-top: 0.6rem; padding-top: 0.6rem; display: flex; justify-content: space-between; font-weight: 700;">
            <span>Total Charged</span>
            <span style="color: var(--gold-primary);">${totalVal}</span>
        </div>
    `;

    closeCart();
    state.cart = {};
    updateCartUI();
    renderMenu();
    orderSuccessModal.classList.add('open');

    // Confetti / Math celebration bursts
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const rx = Math.random() * window.innerWidth;
            const ry = Math.random() * (window.innerHeight * 0.6) + 100;
            spawnMathParticleBurst(rx, ry, 35);
        }, i * 200);
    }
}

// Toast Feedback Notification
let toastTimeout;
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

/* ==========================================================================
   MATHEMATICAL MOTION ANIMATION ENGINE
   ========================================================================== */

const MATH_MODES = [
    { id: 'lissajous', label: 'Math: Lissajous Harmonics', icon: 'fa-wave-square' },
    { id: 'chaos', label: 'Math: Lorenz Attractor', icon: 'fa-infinity' },
    { id: 'orbits', label: 'Math: Keplerian Orbits', icon: 'fa-circle-nodes' },
    { id: 'rose', label: 'Math: Rose Curves (r = a·cos(kθ))', icon: 'fa-certificate' }
];

let currentMathModeIndex = 0;
let mathParticles = [];
let burstParticles = [];
let clickShockwaves = [];
let cursorTrail = []; // Segmented spline points following the cursor
let cursorSwarm = []; // Swarm particles orbiting the cursor with spring math
let mousePos = { 
    x: window.innerWidth / 2, 
    y: window.innerHeight / 2, 
    targetX: window.innerWidth / 2, 
    targetY: window.innerHeight / 2,
    prevX: window.innerWidth / 2,
    prevY: window.innerHeight / 2,
    speed: 0,
    isHoveringInteractive: false
};
let animFrameId = null;

function initMathMotionEngine() {
    const canvas = document.getElementById('mathMotionCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const mathModeBtn = document.getElementById('mathModeBtn');
    const mathModeLabel = document.getElementById('mathModeLabel');

    if (mathModeBtn && mathModeLabel) {
        mathModeBtn.addEventListener('click', () => {
            currentMathModeIndex = (currentMathModeIndex + 1) % MATH_MODES.length;
            mathModeLabel.textContent = MATH_MODES[currentMathModeIndex].label;
            showToast(`Switched to ${MATH_MODES[currentMathModeIndex].label}`);
            reseedMathParticles(canvas.width, canvas.height);
        });
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        reseedMathParticles(canvas.width, canvas.height);
        initCursorSwarm();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse position, speed, and click shockwaves
    window.addEventListener('mousemove', (e) => {
        mousePos.targetX = e.clientX;
        mousePos.targetY = e.clientY;
        
        // Spawn micro-trail sparks on fast movement
        const moveDist = Math.hypot(e.clientX - mousePos.prevX, e.clientY - mousePos.prevY);
        if (moveDist > 6) {
            spawnCursorSparks(e.clientX, e.clientY, Math.min(Math.floor(moveDist / 6), 4));
        }
    });

    window.addEventListener('pointerdown', (e) => {
        // Spawn math shockwave ring on click
        clickShockwaves.push({
            x: e.clientX,
            y: e.clientY,
            radius: 5,
            maxRadius: 90,
            speed: 4.5,
            alpha: 0.9,
            color: '#fce080'
        });
        spawnMathParticleBurst(e.clientX, e.clientY, 15);
    });

    // Initialize cursor trail points for spline math
    cursorTrail = [];
    for (let i = 0; i < 24; i++) {
        cursorTrail.push({ x: mousePos.targetX, y: mousePos.targetY });
    }

    initCursorSwarm();

    let time = 0;

    function renderLoop() {
        time += 0.015;

        // Calculate cursor speed vector and smooth physics interpolation (Lerp)
        const dx = mousePos.targetX - mousePos.x;
        const dy = mousePos.targetY - mousePos.y;
        mousePos.speed = Math.hypot(dx, dy);

        mousePos.prevX = mousePos.x;
        mousePos.prevY = mousePos.y;

        mousePos.x += dx * 0.14;
        mousePos.y += dy * 0.14;

        // Update segmented spline cursor trail using damped spring physics
        cursorTrail[0].x = mousePos.x;
        cursorTrail[0].y = mousePos.y;
        for (let i = 1; i < cursorTrail.length; i++) {
            const leader = cursorTrail[i - 1];
            const follower = cursorTrail[i];
            const tension = 0.42; // Spring elastic tension
            follower.x += (leader.x - follower.x) * tension;
            follower.y += (leader.y - follower.y) * tension;
        }

        // Semi-transparent trailing fade for optical persistence
        ctx.fillStyle = 'rgba(11, 13, 17, 0.28)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const currentMode = MATH_MODES[currentMathModeIndex].id;

        // 1. Draw Background Mathematical Field
        if (currentMode === 'lissajous') {
            drawLissajousField(ctx, canvas.width, canvas.height, time);
        } else if (currentMode === 'chaos') {
            drawLorenzChaos(ctx, canvas.width, canvas.height, time);
        } else if (currentMode === 'orbits') {
            drawKeplerianOrbits(ctx, canvas.width, canvas.height, time);
        } else if (currentMode === 'rose') {
            drawRoseCurves(ctx, canvas.width, canvas.height, time);
        }

        // 2. Draw Interactive Math Cursor Follower (Fluid spline ribbon + Swarm + Aura)
        drawCursorFollowerMath(ctx, time);

        // 3. Draw Click Mathematical Shockwaves
        updateShockwaves(ctx);

        // 4. Draw and update active ballistic click bursts
        updateBurstParticles(ctx);

        animFrameId = requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

// Reseed particles with mathematical parameters
function reseedMathParticles(width, height) {
    mathParticles = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
        mathParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: Math.random() * 2.5 + 1.2,
            // Mathematical frequencies & phases
            freqA: Math.floor(Math.random() * 5 + 1),
            freqB: Math.floor(Math.random() * 5 + 1),
            freqC: Math.random() * 2 + 0.5,
            phase: Math.random() * Math.PI * 2,
            phaseOffset: Math.random() * Math.PI,
            amplitude: Math.random() * 120 + 50,
            orbitAngle: (i / count) * Math.PI * 2,
            orbitDistance: Math.random() * 260 + 60,
            orbitSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            color: (i % 3 === 0) ? '#fce080' : (i % 3 === 1) ? '#d4af37' : '#aa8529',
            alpha: Math.random() * 0.6 + 0.3,
            history: []
        });
    }
}

// 1. Lissajous Harmonics & Harmonograph Motion
function drawLissajousField(ctx, width, height, t) {
    const cx = mousePos.x;
    const cy = mousePos.y;

    mathParticles.forEach((p, idx) => {
        // Mathematical Lissajous Parametric Formula:
        // x(t) = A * sin(a*t + δ) * cos(0.5*t)
        // y(t) = B * cos(b*t + φ) * sin(0.3*t)
        const dx = Math.sin(p.freqA * t * 0.4 + p.phase) * p.amplitude * Math.cos(0.2 * t + p.phaseOffset);
        const dy = Math.cos(p.freqB * t * 0.4 + p.phaseOffset) * p.amplitude * Math.sin(0.3 * t + p.phase);

        // Brownian micro-motion
        p.x += p.vx + Math.sin(t + p.phase) * 0.4;
        p.y += p.vy + Math.cos(t + p.phaseOffset) * 0.4;

        // Wrap edges
        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        const finalX = p.x + dx;
        const finalY = p.y + dy;

        // Draw particle trail
        p.history.push({ x: finalX, y: finalY });
        if (p.history.length > 8) p.history.shift();

        ctx.beginPath();
        for (let h = 0; h < p.history.length; h++) {
            const hPt = p.history[h];
            const hAlpha = (h / p.history.length) * p.alpha * 0.6;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = hAlpha;
            ctx.fillRect(hPt.x, hPt.y, p.radius, p.radius);
        }

        // Draw particle with glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius * (1 + 0.3 * Math.sin(t * 3 + p.phase)), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.restore();

        // Connect nearby points mathematically (Harmonic Proximity Web)
        for (let j = idx + 1; j < Math.min(idx + 12, mathParticles.length); j++) {
            const p2 = mathParticles[j];
            const dist = Math.hypot(finalX - p2.x, finalY - p2.y);
            if (dist < 110) {
                const lineAlpha = (1 - dist / 110) * 0.25;
                ctx.beginPath();
                ctx.moveTo(finalX, finalY);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = '#d4af37';
                ctx.globalAlpha = lineAlpha;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    });

    ctx.globalAlpha = 1;
}

// 2. Lorenz Chaotic Attractor Math System
let lorenzX = 0.1, lorenzY = 0, lorenzZ = 0;
const lorenzSigma = 10, lorenzRho = 28, lorenzBeta = 8 / 3;
let lorenzPoints = [];

function drawLorenzChaos(ctx, width, height, t) {
    const dt = 0.012;
    // Step the Lorenz Differential Equation:
    // dx/dt = σ(y - x)
    // dy/dt = x(ρ - z) - y
    // dz/dt = xy - βz
    for (let step = 0; step < 6; step++) {
        const dx = lorenzSigma * (lorenzY - lorenzX) * dt;
        const dy = (lorenzX * (lorenzRho - lorenzZ) - lorenzY) * dt;
        const dz = (lorenzX * lorenzY - lorenzBeta * lorenzZ) * dt;
        lorenzX += dx;
        lorenzY += dy;
        lorenzZ += dz;

        lorenzPoints.push({ x: lorenzX, y: lorenzY, z: lorenzZ, time: t });
        if (lorenzPoints.length > 320) lorenzPoints.shift();
    }

    const scale = 14;
    const cx = width / 2;
    const cy = height / 2 + 40;

    // Rotate the 3D attractor smoothly around Y and X axis
    const rotY = t * 0.5;
    const rotX = Math.sin(t * 0.2) * 0.3;

    ctx.save();
    ctx.lineWidth = 1.4;
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#fce080';

    for (let i = 1; i < lorenzPoints.length; i++) {
        const p1 = lorenzPoints[i - 1];
        const p2 = lorenzPoints[i];

        // 3D rotation math
        const x1 = (p1.x * Math.cos(rotY) - (p1.z - 25) * Math.sin(rotY)) * scale;
        const z1 = (p1.x * Math.sin(rotY) + (p1.z - 25) * Math.cos(rotY));
        const y1 = (p1.y * Math.cos(rotX) - z1 * Math.sin(rotX)) * scale;

        const x2 = (p2.x * Math.cos(rotY) - (p2.z - 25) * Math.sin(rotY)) * scale;
        const z2 = (p2.x * Math.sin(rotY) + (p2.z - 25) * Math.cos(rotY));
        const y2 = (p2.y * Math.cos(rotX) - z2 * Math.sin(rotX)) * scale;

        const alpha = (i / lorenzPoints.length) * 0.8;

        ctx.beginPath();
        ctx.moveTo(cx + x1, cy + y1);
        ctx.lineTo(cx + x2, cy + y2);
        ctx.strokeStyle = i % 2 === 0 ? '#fce080' : '#d4af37';
        ctx.globalAlpha = alpha;
        ctx.stroke();
    }
    ctx.restore();
    ctx.globalAlpha = 1;
}

// 3. Keplerian Gravitational Orbits (Gravitational inverse-square motion around mouse)
function drawKeplerianOrbits(ctx, width, height, t) {
    const cx = mousePos.x;
    const cy = mousePos.y;

    // Draw central gravitational core glow
    const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 80);
    grad.addColorStop(0, 'rgba(252, 224, 128, 0.45)');
    grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.15)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, 80, 0, Math.PI * 2);
    ctx.fill();

    mathParticles.forEach((p) => {
        p.orbitAngle += p.orbitSpeed;
        
        // Elliptical Keplerian orbit math:
        // r(θ) = a(1 - e²) / (1 + e·cos(θ))
        const eccentricity = 0.35;
        const r = (p.orbitDistance * (1 - eccentricity * eccentricity)) / (1 + eccentricity * Math.cos(p.orbitAngle));
        
        const px = cx + Math.cos(p.orbitAngle) * r;
        const py = cy + Math.sin(p.orbitAngle) * r * 0.65; // Inclined orbital plane

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.radius * 1.3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.restore();

        // Draw gravitational faint vector trail
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
        ctx.stroke();
    });

    ctx.globalAlpha = 1;
}

// 4. Rose Curves & Epitrochoids (r = a * cos(k * θ))
function drawRoseCurves(ctx, width, height, t) {
    const cx = width / 2;
    const cy = height / 2;

    const petals = 6;
    const a = Math.min(width, height) * 0.28;
    const b = a * 0.4;
    
    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#d4af37';
    ctx.lineWidth = 1.6;

    // Outer Rose Curve
    ctx.beginPath();
    for (let theta = 0; theta < Math.PI * 2; theta += 0.02) {
        // Polar equation: r = a * cos(k * θ + ω*t)
        const r = a * Math.cos(petals * theta + t * 0.8) + b * Math.sin(2 * theta - t * 0.4);
        const x = cx + r * Math.cos(theta + t * 0.2);
        const y = cy + r * Math.sin(theta + t * 0.2);

        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(252, 224, 128, 0.35)';
    ctx.stroke();

    // Inner Epitrochoid Ring
    ctx.beginPath();
    const R = 90, rSmall = 35, d = 60;
    for (let theta = 0; theta < Math.PI * 4; theta += 0.03) {
        const x = cx + (R + rSmall) * Math.cos(theta + t) - d * Math.cos(((R + rSmall) / rSmall) * (theta + t));
        const y = cy + (R + rSmall) * Math.sin(theta + t) - d * Math.sin(((R + rSmall) / rSmall) * (theta + t));
        if (theta === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.stroke();

    ctx.restore();
    ctx.globalAlpha = 1;
}

// 5. Ballistic Math Particle Burst on Clicks & Orders
function spawnMathParticleBurst(originX, originY, count = 25) {
    for (let i = 0; i < count; i++) {
        // Polar distribution with random angular velocity
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 3;
        const color = ['#fce080', '#d4af37', '#ffffff', '#aa8529'][Math.floor(Math.random() * 4)];

        burstParticles.push({
            x: originX,
            y: originY,
            // Mathematical velocity components: vx = v·cos(θ), vy = v·sin(θ)
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 2.5,
            gravity: 0.18, // Gravitational acceleration
            drag: 0.96,    // Air friction coefficient
            size: Math.random() * 3.5 + 2,
            life: 1.0,
            decay: Math.random() * 0.02 + 0.015,
            color: color,
            spin: Math.random() * 0.2 - 0.1,
            rotation: Math.random() * Math.PI * 2
        });
    }
}

// 6. Micro Cursor Spark Trail on Mouse Movement
function spawnCursorSparks(originX, originY, count = 2) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 0.5;
        burstParticles.push({
            x: originX + (Math.random() - 0.5) * 8,
            y: originY + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed + 0.4,
            gravity: 0.06,
            drag: 0.94,
            size: Math.random() * 2.2 + 1,
            life: 0.8,
            decay: Math.random() * 0.04 + 0.025,
            color: Math.random() > 0.4 ? '#fce080' : '#ffffff',
            spin: 0.1,
            rotation: Math.random() * Math.PI
        });
    }
}

// 7. Interactive Cursor Follower Mathematical Engine
function initCursorSwarm() {
    cursorSwarm = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
        cursorSwarm.push({
            x: mousePos.targetX,
            y: mousePos.targetY,
            vx: 0,
            vy: 0,
            // Harmonic orbit properties
            angle: (i / count) * Math.PI * 2,
            radius: Math.random() * 45 + 15,
            speed: (Math.random() * 0.04 + 0.02) * (i % 2 === 0 ? 1 : -1),
            freq: Math.random() * 3 + 1,
            phase: Math.random() * Math.PI * 2,
            size: Math.random() * 2.4 + 1.2,
            color: (i % 3 === 0) ? '#fce080' : (i % 3 === 1) ? '#d4af37' : '#ffffff',
            alpha: Math.random() * 0.5 + 0.4
        });
    }
}

function drawCursorFollowerMath(ctx, t) {
    const mx = mousePos.x;
    const my = mousePos.y;

    // A. Draw Dynamic Mathematical Cursor Spotlight Glow
    const glowRadius = Math.min(180, 110 + mousePos.speed * 2.5);
    const grad = ctx.createRadialGradient(mx, my, 4, mx, my, glowRadius);
    grad.addColorStop(0, 'rgba(252, 224, 128, 0.22)');
    grad.addColorStop(0.4, 'rgba(212, 175, 55, 0.08)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(mx, my, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // B. Draw Fluid Damped-Spring Cursor Ribbon Trail
    if (cursorTrail.length > 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < cursorTrail.length - 1; i++) {
            const p0 = cursorTrail[i - 1];
            const p1 = cursorTrail[i];
            const p2 = cursorTrail[i + 1];

            // Harmonic wave offset perpendicular to trail direction
            const angle = Math.atan2(p2.y - p0.y, p2.x - p0.x) + Math.PI / 2;
            const waveAmp = Math.sin(t * 8 + i * 0.5) * (4 * (1 - i / cursorTrail.length));
            const wx = Math.cos(angle) * waveAmp;
            const wy = Math.sin(angle) * waveAmp;

            const ratio = 1 - (i / cursorTrail.length);
            const lineWidth = ratio * 3.5;
            const alpha = ratio * 0.65;

            ctx.beginPath();
            ctx.moveTo(p0.x + wx, p0.y + wy);
            ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
            ctx.strokeStyle = i % 2 === 0 ? '#fce080' : '#d4af37';
            ctx.shadowColor = '#fce080';
            ctx.shadowBlur = 8;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
        ctx.restore();
    }

    // C. Draw Mathematical Swarm Particles Orbiting Cursor (Spring-Mass-Damper + Lissajous)
    cursorSwarm.forEach((p, idx) => {
        p.angle += p.speed;

        // Mathematical harmonic position relative to mouse:
        // x = mx + (r + amp·sin(freq·t + φ)) · cos(θ)
        // y = my + (r + amp·sin(freq·t + φ)) · sin(θ)
        const currentR = p.radius + Math.sin(t * p.freq + p.phase) * 12 + mousePos.speed * 0.8;
        const targetX = mx + Math.cos(p.angle) * currentR;
        const targetY = my + Math.sin(p.angle) * currentR * 0.8;

        // Damped spring physics towards target orbit
        p.vx += (targetX - p.x) * 0.12;
        p.vy += (targetY - p.y) * 0.12;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        // Render particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.restore();

        // Connect nearby swarm nodes to cursor core with golden geometric rays
        const distToCenter = Math.hypot(p.x - mx, p.y - my);
        if (distToCenter < 60 && idx % 3 === 0) {
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = 'rgba(252, 224, 128, 0.25)';
            ctx.lineWidth = 0.7;
            ctx.stroke();
        }
    });

    // D. Central Golden Pulsing Cursor Core
    ctx.save();
    const corePulse = Math.sin(t * 6) * 1.5 + 3.5;
    ctx.beginPath();
    ctx.arc(mx, my, corePulse, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#fce080';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();

    ctx.globalAlpha = 1;
}

// 8. Click Shockwave Wave Propagation
function updateShockwaves(ctx) {
    for (let i = clickShockwaves.length - 1; i >= 0; i--) {
        const sw = clickShockwaves[i];
        sw.radius += sw.speed;
        sw.alpha *= 0.94; // Exponential decay

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = 2.2 * (1 - sw.radius / sw.maxRadius);
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = Math.max(0, sw.alpha);
        ctx.stroke();
        ctx.restore();

        if (sw.radius >= sw.maxRadius || sw.alpha < 0.02) {
            clickShockwaves.splice(i, 1);
        }
    }
}

function updateBurstParticles(ctx) {
    for (let i = burstParticles.length - 1; i >= 0; i--) {
        const p = burstParticles[i];

        // Apply physics equations:
        // v_y = v_y + g
        // v = v * drag
        // x = x + v_x, y = y + v_y
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.vy *= p.drag;

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.rotation += p.spin;

        if (p.life <= 0) {
            burstParticles.splice(i, 1);
            continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
    }
}

/* ==========================================================================
   3D CARD TILT & SPECULAR PHYSICS MATHEMATICS
   ========================================================================== */

function initCard3DTiltPhysics() {
    const cards = document.querySelectorAll('.menu-card');

    cards.forEach(card => {
        // Prevent duplicate listener binding
        if (card.dataset.tiltInitialized === 'true') return;
        card.dataset.tiltInitialized = 'true';

        const glare = card.querySelector('.card-glare');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate normalized coordinate u, v in range [-1, 1]
            const u = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const v = ((e.clientY - rect.top) / rect.height) * 2 - 1;

            // Euler rotation angles calculation with maximum tilt threshold of 10 degrees
            const maxTiltAngle = 9.5;
            const rotX = -v * maxTiltAngle;
            const rotY = u * maxTiltAngle;

            card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-8px)`;

            // Glare specular light reflection mathematics
            if (glare) {
                const glareX = ((u + 1) / 2) * 100;
                const glareY = ((v + 1) / 2) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 230, 120, 0.22) 0%, transparent 65%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            // Smoothly snap back to origin
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

