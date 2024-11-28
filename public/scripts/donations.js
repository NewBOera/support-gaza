const wallets = {
    bitcoin: {
        address: 'bc1q9s0a6h66k5p5qhz6tjr8n4met8nt4hntw9f3qr',
        name: 'Bitcoin (BTC)',
        icon: '₿',
        network: 'Bitcoin Network',
    },
    ethereum: {
        address: '0xE86bA60236eb32Ae28DD58B9feaDD0F355888140',
        name: 'Ethereum (ETH)',
        icon: 'Ξ',
        network: 'Ethereum Network',
    },
    tron: {
        address: 'TJkLFZNxKzhcKsDboXq5QrbFDE5oDvhTQm',
        name: 'Tron (TRX)',
        icon: 'TRX',
        network: 'Tron Network',
    },

    dogecoin: {
        address: 'D9EFGC88URWgNpJtEWsLbFN9rBZFXH1UrK',
        name: 'Dogecoin (DOGE)',
        icon: 'Ð',
        network: 'Dogecoin Network',
    },

    cardano: {
        address: 'addr1qxqme35dfamn234v5nwqkc0qtjvjg7cc7nnr0z3ayjy3wap4ur7wfyylh2f600e90ekgnawn75tfkmevhvhrp8f5h9ssflqhlv',
        name: 'Cardano (ADA)',
        icon: 'ADA',
        network: 'Cardano Network',
    },

    ton: {
        address: 'UQCIlxkKcFhuIGvzmAj__geEvVwRSsFOpXkMM6yDIV2IBp7A',
        name: 'TON (The Open Network)',
        icon: 'TON',
        network: 'TON Network',
    },

    usdtErc20: {
        address: '0xE86bA60236eb32Ae28DD58B9feaDD0F355888140',
        name: 'USDT (ERC-20)',
        icon: '₮',
        network: 'Ethereum Network',
    },
    usdtTrc20: {
        address: 'TJkLFZNxKzhcKsDboXq5QrbFDE5oDvhTQm',
        name: 'USDT (TRC-20)',
        icon: '₮',
        network: 'Tron Network',
    },
};

function createWalletCard(wallet) {
    return `
    <div class="wallet-card">
      <div class="wallet-header">
        <div class="wallet-name">
          <span style="font-size: 1.25rem; font-family: monospace;">${wallet.icon}</span>
          <span style="font-weight: 500;">${wallet.name}</span>
    
        </div>
        <span class="wallet-network">${wallet.network}</span>
      </div>
      <div class="address-container">
        <code class="address">${wallet.address}</code>
        <button class="copy-button" onclick="copyAddress('${wallet.address}', this)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

function initTabs() {
    const popularContent = document.getElementById('popular');
    const stablecoinsContent = document.getElementById('stablecoins');

    // Populate Popular Chains tab
    popularContent.innerHTML =
        createWalletCard(wallets.bitcoin) +
        createWalletCard(wallets.ethereum) +
        createWalletCard(wallets.tron) +
        createWalletCard(wallets.dogecoin) +
        createWalletCard(wallets.cardano) +
        createWalletCard(wallets.ton);
    // Populate Stablecoins tab
    stablecoinsContent.innerHTML = createWalletCard(wallets.usdtErc20) + createWalletCard(wallets.usdtTrc20);

    // Tab switching logic
    document.querySelectorAll('.tab-trigger').forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab button
            document.querySelectorAll('.tab-trigger').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });
}

async function copyAddress(address, button) {
    try {
        await navigator.clipboard.writeText(address);

        // Change icon to checkmark
        const originalHTML = button.innerHTML;
        button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

        // Revert back after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

// Modal functions
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize the interface
initTabs();
