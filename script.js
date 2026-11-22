const WHATSAPP_NUMBER = "201124506681";

const CATEGORIES = [
    { id: "cpu", label: "المعالجات", sub: "Intel & AMD Processors", thumb: "https://i.pinimg.com/1200x/4c/8b/78/4c8b7853deb84ba09f4c631cade3176f.jpg" },
    { id: "motherboard", label: "اللوحات الأم", sub: "LGA 1150 / 1151 / AM4", thumb: "https://i.pinimg.com/1200x/c8/73/ec/c873ecded423ba02ce602daeec29c2f2.jpg" },
    { id: "gpu", label: "كروت الشاشة", sub: "NVIDIA & Radeon GPUs", thumb: "https://i.pinimg.com/1200x/55/2b/c1/552bc1ae85ce32bf8976054191514ed8.jpg" },
    { id: "ram", label: "الرامات", sub: "DDR3 • DDR4 Gaming & Pro", thumb: "https://i.pinimg.com/736x/14/70/0f/14700f2131611a4be845ce50fac3b372.jpg" },
    { id: "storage", label: "التخزين والباور", sub: "SSD & Power Supply", thumb: "https://i.pinimg.com/1200x/f7/ef/2a/f7ef2a2e2da0fef5069e431f912720f1.jpg" },
    { id: "monitor", label: "الشاشات", sub: "FHD & IPS Displays", thumb: "https://i.pinimg.com/736x/f8/75/2f/f8752f4548191badd8998907ca7c6f3e.jpg" }
];

const products = [
    // المعالجات
    {
        id: 1,
        name: "Intel Core i5-4590",
        category: "cpu",
        tier: "اقتصادي",
        condition: "فرز أول",
        price: 1150,
        image: "https://i.pinimg.com/736x/b3/dd/1f/b3dd1fad5c97b42492ef1496be591d32.jpg",
        specs: ["سوكيت LGA 1150 (جيل رابع)", "4 أنوية / 4 مسارات • كاش 6MB", "تردد حتى 3.70 GHz"]
    },
    {
        id: 2,
        name: "Intel Core i7-4790",
        category: "cpu",
        tier: "قمة الجيل الرابع",
        condition: "فرز أول",
        price: 2450,
        image: "https://i.pinimg.com/1200x/4c/8b/78/4c8b7853deb84ba09f4c631cade3176f.jpg",
        specs: ["سوكيت LGA 1150 (جيل رابع)", "4 أنوية / 8 مسارات • كاش 8MB", "تردد حتى 4.00 GHz"]
    },
    {
        id: 3,
        name: "Intel Core i5-8400",
        category: "cpu",
        tier: "متوسط • جيل 8",
        condition: "جيل 8",
        price: 3100,
        image: "https://i.pinimg.com/1200x/49/b6/e7/49b6e791976dd3071007dfc9b3a63526.jpg",
        specs: ["سوكيت LGA 1151 v2", "6 أنوية / 6 مسارات • كاش 9MB", "تردد حتى 4.00 GHz"]
    },
    {
        id: 4,
        name: "AMD Ryzen 5 3600",
        category: "cpu",
        tier: "أداء عالي",
        condition: "AM4",
        price: 3900,
        image: "https://i.pinimg.com/736x/48/14/35/481435b34b35e724ee99feb6831f2015.jpg",
        specs: ["سوكيت AM4 • Zen 2", "6 أنوية / 12 مسار • كاش 32MB", "تردد بوست حتى 4.20 GHz"]
    },
    {
        id: 5,
        name: "Intel Core i5-12400F",
        category: "cpu",
        tier: "فئة عليا • جيل 12",
        condition: "جيل 12",
        price: 6200,
        image: "https://i.pinimg.com/1200x/9c/11/a4/9c11a4e5c8847ada0d9d149f71290779.jpg",
        specs: ["سوكيت LGA 1700", "6 أنوية أداء / 12 مسار • كاش 18MB", "تردد حتى 4.40 GHz (يحتاج كارت خارجي)"]
    },

    // اللوحات الأم
    {
        id: 11,
        name: "H81 LGA 1150 Motherboard",
        category: "motherboard",
        tier: "اقتصادي",
        condition: "مختبرة",
        price: 1350,
        image: "https://i.pinimg.com/1200x/34/51/08/345108bc7766aa7003a40f8cef8788af.jpg",
        specs: ["سوكيت LGA 1150", "2 سلوت DDR3 حتى 16GB", "منفذ PCIe x16 + SATA"]
    },
    {
        id: 12,
        name: "B85 LGA 1150 Motherboard",
        category: "motherboard",
        tier: "متوازن",
        condition: "فرز أول",
        price: 1850,
        image: "https://i.pinimg.com/1200x/be/29/09/be29097530726a3e2ddf258fde59b746.jpg",
        specs: ["سوكيت LGA 1150", "4 سلوت DDR3 حتى 32GB", "USB 3.0 + منافذ إضافية"]
    },
    {
        id: 13,
        name: "H310 / B360 LGA 1151 v2",
        category: "motherboard",
        tier: "جيل 8 و 9",
        condition: "مفحوصة",
        price: 2950,
        image: "https://i.pinimg.com/1200x/5b/b4/01/5bb401c297849c18198983c0face4a94.jpg",
        specs: ["سوكيت LGA 1151 v2 (جيل 8 و 9)", "دعم رامات DDR4", "منفذ PCIe x16 للكروت"]
    },
    {
        id: 14,
        name: "B450 AM4 Motherboard",
        category: "motherboard",
        tier: "أداء عالي",
        condition: "فرز أول",
        price: 4200,
        image: "https://i.pinimg.com/1200x/c8/73/ec/c873ecded423ba02ce602daeec29c2f2.jpg",
        specs: ["سوكيت AM4 لمعالجات Ryzen", "دعم DDR4 و M.2 NVMe", "دوائر طاقة قوية"]
    },

    // كروت الشاشة
    {
        id: 21,
        name: "Radeon RX 550 4GB",
        category: "gpu",
        tier: "اقتصادي",
        condition: "استيراد",
        price: 2100,
        image: "https://i.pinimg.com/736x/6f/2a/e8/6f2ae8303718fc79f64cb55cf733da7a.jpg",
        specs: ["4GB GDDR5 • 128-bit", "بدون كابل باور إضافي", "ألعاب خفيفة و Valorant / CS2"]
    },
    {
        id: 22,
        name: "NVIDIA GTX 1050 Ti 4GB",
        category: "gpu",
        tier: "اقتصادي",
        condition: "فرز أول",
        price: 2950,
        image: "https://i.pinimg.com/736x/6f/5a/1c/6f5a1c8997eabf083ce5561749dba1d7.jpg",
        specs: ["4GB GDDR5 • Pascal", "استهلاك طاقة منخفض", "ألعاب 1080p خفيفة ومتوسطة"]
    },
    {
        id: 23,
        name: "Sapphire Nitro+ RX 570 4GB",
        category: "gpu",
        tier: "قيمة مقابل سعر",
        condition: "حرارة ممتازة",
        price: 3850,
        image: "https://i.pinimg.com/1200x/55/2b/c1/552bc1ae85ce32bf8976054191514ed8.jpg",
        specs: ["4GB GDDR5 • 256-bit", "يحتاج باور أصلي 450W فأعلى", "أداء قوي على 1080p"]
    },
    {
        id: 24,
        name: "Radeon RX 580 8GB",
        category: "gpu",
        tier: "متوسط • 8GB",
        condition: "مختبر",
        price: 4950,
        image: "https://i.pinimg.com/736x/aa/2b/a3/aa2ba3aed2ee8fcedf2a2d1e82c07a92.jpg",
        specs: ["8GB GDDR5 • 256-bit", "يحتاج باور أصلي 500W فأعلى", "ألعاب وتعديلات جرافيك"]
    },
    {
        id: 25,
        name: "NVIDIA GTX 1660 Super 6GB",
        category: "gpu",
        tier: "أداء عالي",
        condition: "كسر زيرو",
        price: 6700,
        image: "https://i.pinimg.com/1200x/a5/12/43/a512433c1a515256773be11bc47e0dc8.jpg",
        specs: ["6GB GDDR6 • Turing", "يحتاج باور أصلي 450W - 500W+", "ألعاب 1080p عالية ومونتاج"]
    },
    {
        id: 26,
        name: "NVIDIA RTX 2060 Super 8GB",
        category: "gpu",
        tier: "فئة عليا",
        condition: "مختبر",
        price: 9500,
        image: "https://i.pinimg.com/1200x/e5/9f/53/e59f53a8cd4dab8aadd53a85512a3b52.jpg",
        specs: ["8GB GDDR6 • DLSS", "يحتاج باور أصلي 550W فأعلى", "ألعاب ثقيلة، ريندر، ومونتاج"]
    },

    // الرامات
    {
        id: 31,
        name: "DDR3 4GB 1600MHz",
        category: "ram",
        tier: "اقتصادي",
        condition: "فرز أول",
        price: 300,
        image: "https://i.pinimg.com/1200x/81/36/44/813644d9e0a8f445629d288339c0b0f8.jpg",
        specs: ["سعة 4GB DDR3", "تردد 1600MHz • 1.5V", "أجهزة مكتبية وتصفح"]
    },
    {
        id: 32,
        name: "DDR3 8GB 1600MHz",
        category: "ram",
        tier: "عملي",
        condition: "مختبرة",
        price: 550,
        image: "https://i.pinimg.com/1200x/81/36/44/813644d9e0a8f445629d288339c0b0f8.jpg",
        specs: ["سعة 8GB DDR3 قطعة واحدة", "تردد 1600MHz", "تجميعات الجيل الرابع"]
    },
    {
        id: 33,
        name: "DDR4 8GB 2666MHz",
        category: "ram",
        tier: "بداية DDR4",
        condition: "فرز أول",
        price: 750,
        image: "https://i.pinimg.com/1200x/f0/93/62/f0936286d9f918577cd4e1025c263f7c.jpg",
        specs: ["سعة 8GB DDR4", "تردد 2666MHz • 1.2V", "بداية تجميعات DDR4"]
    },
    {
        id: 34,
        name: "Kingston HyperX Fury 16GB (2x8) DDR4",
        category: "ram",
        tier: "الأكثر طلباً",
        condition: "Dual Channel",
        price: 1450,
        image: "https://i.pinimg.com/736x/14/70/0f/14700f2131611a4be845ce50fac3b372.jpg",
        specs: ["16GB (قطعتين × 8GB)", "تردد 3200MHz DDR4", "ألعاب حديثة وتعدد مهام"]
    },
    {
        id: 35,
        name: "Corsair Vengeance RGB Pro 16GB (2x8) DDR4",
        category: "ram",
        tier: "جيمنج RGB",
        condition: "RGB",
        price: 1850,
        image: "https://i.pinimg.com/736x/0d/58/93/0d5893bd57121aa835a315c8b2fb74c5.jpg",
        specs: ["16GB (قطعتين × 8GB) RGB", "تردد 3200MHz DDR4", "مظهر جيمنج وأداء مستقر"]
    },
    {
        id: 36,
        name: "Corsair Vengeance LPX 32GB (2x16) DDR4",
        category: "ram",
        tier: "فئة عليا",
        condition: "فرز أول",
        price: 2850,
        image: "https://i.pinimg.com/1200x/b2/97/4e/b2974e24056f1c67e7803e94a20c4946.jpg",
        specs: ["32GB (قطعتين × 16GB)", "تردد 3200MHz DDR4", "مونتاج، ريندر، وتصميم"]
    },

    // التخزين والباور
    {
        id: 41,
        name: "SSD 128GB SATA III",
        category: "storage",
        tier: "اقتصادي",
        condition: "Health 100%",
        price: 550,
        image: "https://i.pinimg.com/236x/7c/fb/0f/7cfb0f282b6c5a991214c5cc8e6f843e.jpg",
        specs: ["سعة 128GB • SATA III", "إقلاع سريع للويندوز والبرامج"]
    },
    {
        id: 42,
        name: "Power Supply 450W الأصلي",
        category: "storage",
        tier: "باور مضمون",
        condition: "مفحوص",
        price: 850,
        image: "https://i.pinimg.com/736x/ae/50/59/ae5059b2bfa14498af8f339777101353.jpg",
        specs: ["قدرة 450W فولتيات مستقرة", "مناسب للتجميعات الاقتصادية"]
    },
    {
        id: 43,
        name: "Samsung 870 EVO 500GB SSD",
        category: "storage",
        tier: "أداء عالي",
        condition: "Health 99-100%",
        price: 1500,
        image: "https://i.pinimg.com/1200x/32/3e/b6/323eb61ea4fbae2534dbc8001d14451c.jpg",
        specs: ["سعة 500GB • SATA III", "سرعة قراءة حتى 560MB/s"]
    },
    {
        id: 44,
        name: "Power Supply 600W 80+ Bronze",
        category: "storage",
        tier: "فئة عليا",
        condition: "مختبر",
        price: 1850,
        image: "https://i.pinimg.com/1200x/f7/ef/2a/f7ef2a2e2da0fef5069e431f912720f1.jpg",
        specs: ["قدرة 600W • 80 Plus Bronze", "مناسب للجيمنج والكروت الأعلى"]
    },

    // الشاشات
    {
        id: 51,
        name: "Dell 19\" / 20\" Monitor",
        category: "monitor",
        tier: "اقتصادي",
        condition: "بدون عيوب",
        price: 1650,
        image: "https://i.pinimg.com/1200x/54/48/50/544850a256b6a7a3716c429058fb8c64.jpg",
        specs: ["مقاس 19 إلى 20 بوصة", "مذاكرة، حسابات، وتصفح"]
    },
    {
        id: 52,
        name: "HP / Dell 22\" FHD Monitor",
        category: "monitor",
        tier: "Full HD",
        condition: "فرز أول",
        price: 2650,
        image: "https://i.pinimg.com/736x/3b/05/98/3b0598bc6297072b4f1b00d31ecfddcc.jpg",
        specs: ["مقاس 22 بوصة • Full HD", "ألعاب، أفلام، وعمل يومي"]
    },
    {
        id: 53,
        name: "Dell UltraSharp / IPS 24\" FHD",
        category: "monitor",
        tier: "IPS • فئة عليا",
        condition: "ألوان دقيقة",
        price: 3800,
        image: "https://i.pinimg.com/736x/f8/75/2f/f8752f4548191badd8998907ca7c6f3e.jpg",
        specs: ["مقاس 24 بوصة لوحة IPS", "تصميم، مونتاج، ومشاهدة"]
    }
];

function fallbackImg(name) {
    const clean = name.replace(/[<>&"]/g, "");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220"><rect width="600" height="220" fill="#090c14"/><text x="300" y="105" text-anchor="middle" fill="#00f0ff" font-family="sans-serif" font-size="14" font-weight="700">COMPU-GATE</text><text x="300" y="132" text-anchor="middle" fill="#f0f4f8" font-family="sans-serif" font-size="18" font-weight="800">${clean}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const categoryGateways = document.getElementById("categoryGateways");
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const budgetFilter = document.getElementById("budgetFilter");
const resultsCount = document.getElementById("resultsCount");

const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutWaBtn = document.getElementById("checkoutWaBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const toast = document.getElementById("toast");

let activeCat = "all";
let searchQuery = "";
let activeBudget = "all";
let cart = [];

function formatPrice(num) {
    return Number(num).toLocaleString("en-US");
}

function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

function renderGateways() {
    if (!categoryGateways) return;
    categoryGateways.innerHTML = "";

    const allCard = document.createElement("button");
    allCard.type = "button";
    allCard.className = `gateway-card ${activeCat === "all" ? "active" : ""}`;
    allCard.innerHTML = `
        <div class="gateway-info">
            <strong>كل القطع</strong>
            <span>عرض جميع الأقسام</span>
        </div>
        <span class="gateway-count">${products.length}</span>
    `;
    allCard.addEventListener("click", () => {
        activeCat = "all";
        renderGateways();
        renderProducts();
    });
    categoryGateways.appendChild(allCard);

    CATEGORIES.forEach(cat => {
        const count = products.filter(p => p.category === cat.id).length;
        const card = document.createElement("button");
        card.type = "button";
        card.className = `gateway-card ${activeCat === cat.id ? "active" : ""}`;
        card.innerHTML = `
            <div class="gateway-thumb">
                <img src="${cat.thumb}" alt="${cat.label}" onerror="this.onerror=null;this.src='${fallbackImg(cat.label)}';">
            </div>
            <div class="gateway-info">
                <strong>${cat.label}</strong>
                <span>${cat.sub}</span>
            </div>
            <span class="gateway-count">${count}</span>
        `;
        card.addEventListener("click", () => {
            activeCat = cat.id;
            renderGateways();
            renderProducts();
            const target = document.getElementById(`group-${cat.id}`);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
        categoryGateways.appendChild(card);
    });
}

function createProductCard(item) {
    const formattedPrice = formatPrice(item.price);
    const imgUrl = item.image ? item.image : fallbackImg(item.name);
    const waText = encodeURIComponent(
        `أهلاً بك 👋\nأرغب في طلب:\n*${item.name}*\nالسعر: ${formattedPrice} جنيه`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <div>
            <div class="card-img-wrap">
                <img src="${imgUrl}" alt="${item.name}" onerror="this.onerror=null;this.src='${fallbackImg(item.name)}';">
                <span class="condition-tag">${item.condition}</span>
            </div>
            <div class="card-body">
                <span class="tier-badge">${item.tier}</span>
                <h3 class="card-title">${item.name}</h3>
                <div class="specs-box-title">المواصفات:</div>
                <ul class="specs-list">
                    ${item.specs.map(s => `<li><i class="fa-solid fa-check"></i>${s}</li>`).join("")}
                </ul>
            </div>
        </div>
        <div class="card-footer">
            <div>
                <span class="price-label">السعر</span>
                <div class="price-value">${formattedPrice} <span>ج.م</span></div>
            </div>
            <div class="card-actions">
                <button type="button" class="btn-add-cart" data-id="${item.id}" title="أضف للتجميعة">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <a href="${waUrl}" target="_blank" class="btn-wa-order">
                    <i class="fa-brands fa-whatsapp"></i> اطلب
                </a>
            </div>
        </div>
    `;
    return card;
}

function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    const filtered = products.filter(item => {
        const matchesCat = activeCat === "all" || item.category === activeCat;
        const matchesSearch =
            !searchQuery ||
            item.name.toLowerCase().includes(searchQuery) ||
            item.tier.toLowerCase().includes(searchQuery) ||
            item.specs.some(s => s.toLowerCase().includes(searchQuery));

        let matchesBudget = true;
        if (activeBudget === "budget") matchesBudget = item.price < 2000;
        if (activeBudget === "mid") matchesBudget = item.price >= 2000 && item.price <= 4500;
        if (activeBudget === "high") matchesBudget = item.price > 4500;

        return matchesCat && matchesSearch && matchesBudget;
    });

    if (resultsCount) {
        resultsCount.textContent = `عدد القطع: ${filtered.length}`;
    }

    const groupsToShow = CATEGORIES.filter(c => activeCat === "all" || c.id === activeCat);
    let renderedAny = false;

    groupsToShow.forEach(cat => {
        const catItems = filtered
            .filter(p => p.category === cat.id)
            .sort((a, b) => a.price - b.price);

        if (!catItems.length) return;
        renderedAny = true;

        const groupEl = document.createElement("div");
        groupEl.className = "category-group";
        groupEl.id = `group-${cat.id}`;

        groupEl.innerHTML = `
            <div class="category-group-header">
                <h3>${cat.label} (${catItems.length})</h3>
                <span>مرتب من الأقل للأعلى سعراً</span>
            </div>
        `;

        const gridEl = document.createElement("div");
        gridEl.className = "products-grid";
        catItems.forEach(item => gridEl.appendChild(createProductCard(item)));

        groupEl.appendChild(gridEl);
        productsGrid.appendChild(groupEl);
    });

    if (!renderedAny) {
        productsGrid.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:32px;">لا توجد قطع مطابقة للبحث الحالي.</p>`;
    }

    document.querySelectorAll(".btn-add-cart").forEach(btn => {
        btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
    });
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    cart.push(prod);
    updateCartUI();
    showToast(`تمت إضافة ${prod.name} ✅`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    if (!cartCount || !cartItemsContainer || !cartTotal) return;
    cartCount.textContent = cart.length;
    cartItemsContainer.innerHTML = "";

    if (!cart.length) {
        cartItemsContainer.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:24px;">سلة التجميعة فارغة.</p>`;
        cartTotal.textContent = "0 ج.م";
        return;
    }

    let total = 0;
    cart.forEach((item, idx) => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span>${formatPrice(item.price)} ج.م</span>
            </div>
            <button type="button" class="remove-item-btn" data-index="${idx}"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartItemsContainer.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.index)));
    });

    cartTotal.textContent = `${formatPrice(total)} ج.م`;
}

if (openCartBtn && cartDrawer && cartOverlay) {
    openCartBtn.addEventListener("click", () => {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
    });
}

function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove("open");
    if (cartOverlay) cartOverlay.classList.remove("open");
}

if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        updateCartUI();
    });
}

if (checkoutWaBtn) {
    checkoutWaBtn.addEventListener("click", () => {
        if (!cart.length) {
            showToast("أضف قطعة واحدة على الأقل أولاً");
            return;
        }
        let total = 0;
        const lines = cart.map((item, i) => {
            total += item.price;
            return `${i + 1}- ${item.name} (${formatPrice(item.price)} ج)`;
        });
        const msg = encodeURIComponent(
            `أهلاً بك 👋\nطلب تجميعة / قطع:\n\n${lines.join("\n")}\n\n*الإجمالي: ${formatPrice(total)} جنيه*`
        );
        window.open(`https://wa.me/${01124506681}?text=${msg}`, "_blank");
    });
}

if (searchInput) {
    searchInput.addEventListener("input", e => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
    });
}

if (budgetFilter) {
    budgetFilter.addEventListener("change", e => {
        activeBudget = e.target.value;
        renderProducts();
    });
}

renderGateways();
renderProducts();
updateCartUI();