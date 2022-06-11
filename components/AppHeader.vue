<template>
    <div>
        <section>
        <div class="px-6 py-6 lg:px-12">
          <nav class="flex justify-between">
            <div class="flex items-center w-full">
              <a href="#">
                <img class="h-12" src="/assets/images/list-order-svgrepo-com.svg" alt="">
              </a>
              <ul class="hidden px-4 mr-auto xl:flex ml-14 2xl:ml-40">
                <li class="mr-8 2xl:mr-14">
                  <a class="flex items-center font-medium font-heading hover:text-darkBlueGray-400" href="#">
                    <img class="mr-2" src="/assets/uinel-assets/elements/dashboard-navigations/dashboards.svg" alt="">
                    <span>Dashboard</span>
                  </a>
                </li>
                <li class="mr-8 2xl:mr-14">
                  <a class="flex items-center font-medium font-heading hover:text-darkBlueGray-400" href="#">
                    <img class="mr-2" src="/assets/uinel-assets/elements/dashboard-navigations/users.svg" alt="">
                    <span>Users</span>
                  </a>
                </li>
                <li class="mr-8 2xl:mr-14">
                  <a class="flex items-center font-medium font-heading hover:text-darkBlueGray-400" href="#">
                    
                    
                  </a>
                </li>
                <li class="mr-8 2xl:mr-14">
                  
                </li>
                <li>
                  <a class="flex items-center font-medium font-heading hover:text-darkBlueGray-400" href="#">
                    
                    
                    <svg width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="#8C949F"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div class="items-center hidden xl:flex">
                <a class="relative inline-block text-darkBlueGray-300 hover:text-darkBlueGray-400" href="#">
                  <div class="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 -mb-1 -mr-2 text-xs text-white bg-red-500 rounded-full">1</div>
                  <svg width="20" height="23" viewbox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M1 18.0121H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.87891 22H10.8789" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
                <div class="flex-shrink-0 w-px h-12 mr-10 bg-gray-100 ml-9"></div>
                <a class="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500" href="#">
                  <div class="mr-6 text-right">
                    <span class="block font-medium leading-tight font-heading">{{profile?.email}}</span>
                  </div>
                  
                  <svg width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="#8C949F"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button class="self-center navbar-burger xl:hidden">
              <svg width="25" height="16" viewbox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="25" height="2" fill="currentColor"></rect><rect y="14" width="25" height="2" fill="currentColor"></rect></svg>
            </button>
          </nav>
        </div>
        
        <div class="fixed top-0 bottom-0 left-0 z-50 hidden w-full navbar-menu sm:w-5/6 max-w-max">
          <div class="fixed inset-0 navbar-backdrop bg-darkGray-800 opacity-80"></div>
          <nav class="relative flex flex-col w-full h-full px-10 py-20 overflow-y-auto bg-blueGray-100">
            <button class="absolute navbar-close top-10 right-10">
              <svg width="14" height="13" viewbox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="13.495" y1="0.494975" x2="1.49498" y2="12.495" stroke="#326BFF" stroke-width="1.4"></line><line x1="12.505" y1="12.495" x2="0.505026" y2="0.494976" stroke="#326BFF" stroke-width="1.4"></line></svg>
            </button>
            <a class="inline-block mb-12" href="#">
              <img class="h-12" src="/assets/uinel-assets/logos/dashboard/uifive-white-black.svg" alt="">
            </a>
            <ul class="mb-16">
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-white rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/dashboards.svg" alt="">
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/users.svg" alt="">
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/chat.svg" alt="">
                  <span>Chat</span>
                </a>
              </li>
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/dashboards.svg" alt="">
                  <span>Chat</span>
                </a>
              </li>
              <li>
                <a class="flex items-center w-full py-4 pl-10 pr-8 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/add-mail.svg" alt="">
                  <span class="mr-auto">Messages</span>
                  <svg width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z" fill="#8C949F"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a class="flex items-center w-full py-4 pl-10 pr-8 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/folder.svg" alt="">
                  <span class="mr-auto">Catalog</span>
                  <svg width="8" height="5" viewbox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97291 0.19311C7.20854 -0.0645328 7.58938 -0.0645328 7.82328 0.19311C8.05804 0.450753 8.05978 0.867019 7.82328 1.12466L4.42529 4.80665C4.19053 5.06429 3.81056 5.06429 3.57406 4.80665L0.176073 1.12466C-0.0586909 0.86798 -0.0586909 0.450753 0.176073 0.19311C0.411706 -0.0645328 0.792544 -0.0645328 1.02644 0.19311L4.00098 3.21272L6.97291 0.19311Z" fill="#8C949F"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <span class="inline-block mb-6 text-sm font-medium text-darkBlueGray-400 font-heading">New tools</span>
            <ul class="mb-16">
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/pointer.svg" alt="">
                  <span>Location</span>
                </a>
              </li>
              <li>
                <a class="flex items-center py-4 pl-10 pr-24 font-medium bg-transparent rounded-3xl font-heading" href="#">
                  <img class="mr-5" src="/assets/uinel-assets/elements/dashboard-navigations/document.svg" alt="">
                  <span>Documents</span>
                </a>
              </li>
            </ul>
            <ul class="pb-24 mb-auto">
              <li><a class="text-sm font-medium leading-8 text-darkBlueGray-400 font-heading" href="#">About</a></li>
              <li><a class="text-sm font-medium leading-8 text-darkBlueGray-400 font-heading" href="#">Help center</a></li>
              <li><a class="text-sm font-medium leading-8 text-darkBlueGray-400 font-heading" href="#">Contact</a></li>
            </ul>
            <div class="pt-8 border-t border-blueGray-200">
              <span class="inline-block mb-5 text-sm font-medium text-darkBlueGray-400 font-heading">Upcoming</span>
              <a class="flex items-center px-6 py-4 bg-white shadow-lg rounded-3xl text-darkBlueGray-300 hover:text-darkBlueGray-400" href="#">
                <img class="w-10 h-10 mr-2 sm:w-14 sm:h-14 sm:mr-5" src="/assets/uinel-assets/images/dashboard-navigations/avatar-image.png" alt="">
                <div class="pr-1 mr-auto">
                  <span class="block text-sm font-medium leading-tight text-darkBlueGray-900 font-heading">Product design</span>
                  <span class="text-xs font-medium leading-tight text-darkBlueGray-300">MON, 8 AM</span>
                </div>
                <svg width="5" height="8" viewbox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.193232 1.02782C-0.064411 0.79219 -0.064411 0.411351 0.193232 0.177457C0.450875 -0.0573063 0.867141 -0.0590449 1.12478 0.177457L4.80677 3.57544C5.06441 3.8102 5.06441 4.19017 4.80677 4.42668L1.12478 7.82466C0.868102 8.05942 0.450875 8.05942 0.193232 7.82466C-0.0644107 7.58903 -0.0644107 7.20819 0.193232 6.97429L3.21284 3.99975L0.193232 1.02782Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
</template>

<script setup>

const profile = useState("globalProfile");

</script>

<style scoped>

</style>