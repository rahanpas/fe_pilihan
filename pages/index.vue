<script setup>
definePageMeta({
  middleware: "auth",
})
</script>
<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase">Gabung
            Sekarang</span>
          <h1 data-aos="fade-right" data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            Create A
            <span class="text-header-gradient"> Digital </span> Marketing Plan
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Kami hadir untuk membantu anda dalam mempromosikan Profil, Usaha,
            dan Konten Kreasi
          </p>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
              Selengkapnya
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img data-aos="fade-up" data-aos-once="true" src="~/assets/img/hero-image.webp" class="-mt-4" alt="" />
          </div>
        </div>
        <img data-aos="fade-up" data-aos-delay="300" src="~/assets/img/pattern/ellipse-1.png"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6" />
        <img data-aos="fade-up" data-aos-delay="300" src="~/assets/img/pattern/ellipse-2.png"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6" />
        <img data-aos="fade-up" data-aos-delay="300" src="~/assets/img/pattern/ellipse-3.png"
          class="hidden sm:block absolute bottom-56 right-24 w-6" />
        <img data-aos="fade-up" data-aos-delay="300" src="~/assets/img/pattern/star.png"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8" />
      </BaseSection>
    </section>

    <!-- Industry-leading security section -->
    <section class="w-full">
      <div class="relative max-w-screen-2xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 my-24">
          <h2 class="text-4xl font-semibold">
            Produk Pilihan <span class="text-header-gradient">Kami</span>
          </h2>
        </div>
        <div data-aos="fade-right" class="col-span-12">
          <div class="w-full">
            <div class="flex flex-col w-full lg:flex-row">
              <div class="grid flex-grow card rounded-box place-items-center h-auto">
                <div class="card w-auto bg-base-100 shadow-xl  min-h-full">
                  <div class="card-body items-center text-center">
                    <h1 data-aos="fade-right" data-aos-once="true"
                      class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize">
                      Jasa Konten Kreator
                    </h1>
                  </div>
                  <figure class="px-10 pt-10">
                    <img src="https://wallpapercave.com/wp/wp3950063.jpg" alt="Shoes"
                      class="rounded-xl object-cover h-48 w-96 min-w-full" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      Mulai Dari 5 Juta Rupiah Per Bulan
                    </h2>
                    <p>
                      *untuk program entree, spring dan blooms durasi minimum 6
                      bulan
                    </p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Pilih Paket</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider lg:divider-horizontal"></div>
              <div class="grid flex-grow card rounded-box place-items-center h-auto">
                <div class="card w-auto bg-base-100 shadow-xl h-auto min-h-full">
                  <div class="card-body items-center text-center">
                    <h1 data-aos="fade-right" data-aos-once="true"
                      class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize">
                      Jasa Pembuatan Web Site
                    </h1>
                  </div>
                  <figure class="px-10 pt-10">
                    <img src="https://cdn.wallpapersafari.com/46/63/j0Uu9b.jpg" alt="Shoes"
                      class="rounded-xl object-cover h-48 w-96 min-w-full" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      Mulai Dari 3 Juta Rupiah Per Bulan
                    </h2>
                    <p>
                      *untuk program entree, spring dan blooms durasi minimum 6
                      bulan
                    </p>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Pilih Paket</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider lg:divider-horizontal"></div>
              <div class="grid flex-grow card rounded-box place-items-center h-auto">
                <div class="card w-auto bg-base-100 shadow-xl h-auto min-h-full">
                  <div class="card-body items-center text-center">
                    <img src="https://myads.telkomsel.com/images/myads-logo-color.png" />
                  </div>
                  <figure class="px-10 pt-10">
                    <img src="https://c.pxhere.com/images/63/63/c7c823330ec7d376ef4a7e896dd3-1451419.jpg!d" alt="Shoes"
                      class="rounded-xl object-cover h-48 w-96 min-w-full" />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary-focus">
                      Rp.175,-<kbd class="kbd kbd-xs">Per Pesan</kbd>
                    </h2>
                    <p class="text-info">
                      Kirim iklan bisnis Anda ke lebih dari 160 juta pengguna
                      Telkomsel
                    </p>
                    <div class="card-actions">
                      <button class="btn btn-warning">Mulai Sekarang</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="w-full my-10 flex justify-center">
      <!-- <a
          v-smooth-scroll
          data-aos="flip-down"
          data-aos-delay="150"
          href="#navbar"
          class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
        >
          <span>Back to top</span>
          <ArrowUpIcon :size="20" />
        </a> -->
      <NuxtLink to="#top">
        <button data-aos="flip-down" data-aos-delay="150"
          class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700">
          To top with NuxtLink to="#top"
        </button>
      </NuxtLink>
    </div>
    <!-- <div class="toast">
      <div class="alert alert-info">
        <span>New message arrived.</span>
      </div>
    </div> -->
  </div>
</template>
  
<script>
import aosMixin from "@/mixins/aos";
export default {
  name: "IndexPage",
  mixins: [aosMixin],
  middleware: "auth",
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: "country-icon/eng.png",
        name: "USD",
      },
      currencies: [
        {
          img: "country-icon/eng.png",
          name: "USD",
        },
      ],
      cryptoSelected: {
        img: "crypto-icon/bitcoin.png",
        name: "BTC",
      },
      cryptocurrencies: [
        {
          img: "crypto-icon/bitcoin.png",
          name: "BTC",
        },
      ],
      trendings: [
        {
          id: 1,
          name: "Bitcoin",
          price: 43180.13,
          logo: "bitcoin.png",
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: "Ethereum",
          price: 3480.65,
          logo: "ethereum.png",
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: "Solana",
          price: 150.2,
          logo: "solana.png",
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: "Dogecoin",
          price: 0.1572,
          logo: "dogecoin.png",
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name: "PAPPAY",
          price: 0.00374,
          logo: "pappay.png",
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45],
        },
        {
          id: 2,
          name: "Bitcoin Asia",
          price: 0.02096,
          logo: "bitcoin-asia.png",
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70],
        },
        {
          id: 3,
          name: "MoonRock",
          price: 0.004907,
          logo: "moonrock.png",
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45],
        },
        {
          id: 4,
          name: "NinjaFloki",
          price: 0.000123,
          logo: "ninjafloki.png",
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35],
        },
      ],
      recents: [
        {
          id: 1,
          name: "MetaCraft",
          price: 0.0608,
          logo: "metacraft.png",
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45],
        },
        {
          id: 2,
          name: "Frog",
          price: 0.5875,
          logo: "frog.png",
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45],
        },
        {
          id: 3,
          name: "Musk Doge",
          price: 0.04041,
          logo: "musk-doge.png",
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45],
        },
        {
          id: 4,
          name: "2SHARE",
          price: 1366.24,
          logo: "2share.png",
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40],
        },
      ],
      accordions: [
        {
          title: "Why should I choose NEFA?",
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: "How secure is NEFA?",
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: "Do I have to buy a whole Bitcoin?",
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
        {
          title: "How do I actually buy Bitcoin?",
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
        },
      ],
      steps: [
        {
          img: "sign-up.png",
          title: "Sign Up",
          description:
            "Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile",
        },
        {
          img: "fund.png",
          title: "Fund",
          description:
            "Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet",
        },
        {
          img: "buy-crypto.png",
          title: "Buy Crypto",
          description:
            "Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere",
        },
      ],
    };
  },
};
</script>
  
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg,
      #3984f4 -6.01%,
      #0cd3ff 36.87%,
      #2f7cf0 78.04%,
      #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-partner {
  background: url("../assets/img/partner/background.png");
  background-size: cover;
  background-position: center;
}

.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}

.max-h-0 {
  max-height: 0;
}
</style>
  