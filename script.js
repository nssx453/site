  // Плавная прокрутка
        function scrollToSection(sectionId) {
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Корзина
        let cart = [];
        
        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            updateCart();
            alert(productName + " добавлен в корзину!");
        }
        
        function updateCart() {
            let cartElement = document.getElementById('cart');
            let totalElement = document.getElementById('total');
            
            cartElement.innerHTML = '';
            let total = 0;
            
            cart.forEach(item => {
                let itemElement = document.createElement('div');
                itemElement.textContent = item.name + ' - ' + item.price + ' руб';
                cartElement.appendChild(itemElement);
                total += item.price;
            });
            
            totalElement.textContent = 'Итого: ' + total + ' руб';
        }
        
        function checkout() {
            if (cart.length === 0) {
                alert('Корзина пуста!');
                return;
            }
            alert('Заказ оформлен! Сумма: ' + 
                  cart.reduce((sum, item) => sum + item.price, 0) + ' руб');
            cart = [];
            updateCart();
        }

        // Обработка формы
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });

        // Подсветка активного пункта меню при прокрутке
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.menu a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
  
