

const myfavoritetail = () => {
  return `
    <div><div class=" container mx-auto px-6 ">
    <nav class=" flex justify-between items-center py-5 boder border-dashed border-black border-2 border rounded-t-lg rounded-b-lg ">
      <div class="w-36 md:w-36 ">
        <img src="anh5.jpg" alt="">
      </div>
      <div class="">
    <ul id="menu" class="invisible fixed top-0 left-0  w-full  flexd flex-col h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-90  md:bg-transparent md:h-auto md:flex-row md:justify-between md:static md:visible">
    <li class="m-11  "><a class=" hover:text-red-500 transition duration-700 ease-in" href="/">Trang Chủ</a></li>
    <li class="m-11 "><a class=" hover:text-red-500 transition duration-700 ease-in" href="/about">Thông Tin Cá Nhân</a></li>
    <li class="m-11"><a class=" hover:text-red-500 transition duration-700 ease-in" href="/products">Dự án</a></li>
    <li class="m-11 "><a class=" hover:text-red-500 transition duration-700 ease-in" href="/">Blog</a></li>
    <li class="m-11"><a class=" hover:text-red-500 transition duration-700 ease-in" href="/">contact</a></li>    
   </ul>
  </div>
  <div id="menu-button" class="z-20 md:hidden curson-pointer ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </div>
    </nav>   
  
</div>
    <div id="app"></div>
    <script type="module" src="./src/main.js"></script>
    <div class="container">
      <img src="anh7.jpg" alt="">
    </div> </div>
    `
}

export default myfavoritetail;