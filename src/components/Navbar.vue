<template>
  <div class="navbar bg-primary text-neutral">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
        >
          <li tabindex="0">
            <RouterLink to="/"
              ><a class="justify-between"><font-awesome-icon icon="house" /></a
            ></RouterLink>
          </li>
          <li tabindex="0">
            <a class="justify-between"
              >INFORMASI KAMI<font-awesome-icon icon="chevron-down"
            /></a>
            <ul class="p-2 bg-primary">
              <RouterLink to="/sambutan"
                ><li><a>Sambutan</a></li></RouterLink
              >
              <RouterLink to="/visimisi"
                ><li><a>Visi Dan Misi</a></li></RouterLink
              >
              <RouterLink to="/guru"
                ><li><a>Guru Dan Tenaga Kependidikan</a></li></RouterLink
              >
              <RouterLink to="/download"
                ><li><a>Download</a></li></RouterLink
              >
            </ul>
          </li>
          <li tabindex="1">
            <a class="justify-between"
              >PROGRAM STUDI<font-awesome-icon icon="chevron-down"
            /></a>
            <ul class="p-2 bg-primary">
              <RouterLink to="/tkj"
                ><li><a>Teknik Komputer Jaringan</a></li></RouterLink
              >
              <RouterLink to="/multimedia"
                ><li><a>Multimedia</a></li></RouterLink
              >
              <RouterLink to="/jasaboga"
                ><li><a>Tata Boga</a></li></RouterLink
              >
              <RouterLink to="/perkantoran"
                ><li><a>Perkantoran</a></li></RouterLink
              >
              <RouterLink to="/akuntansi"
                ><li><a>Akuntansi</a></li></RouterLink
              >
            </ul>
          </li>
          <li tabindex="3">
            <a class="justify-between"
              >MEDIA & INFORMASI<font-awesome-icon icon="chevron-down"
            /></a>
            <ul class="p-2 bg-primary">
              <RouterLink to="/berita"
                ><li><a>Berita</a></li></RouterLink
              >
              <RouterLink to="/gallery"
                ><li><a>Galeri</a></li></RouterLink
              >
              <RouterLink to="/agenda"
                ><li><a>Agenda</a></li></RouterLink
              >
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop navbar -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0 text-sm font-medium">
        <li tabindex="0">
          <RouterLink to="/"
            ><a class="justify-between"><font-awesome-icon icon="house" /></a
          ></RouterLink>
        </li>
        <li tabindex="0">
          <a> INFORMASI KAMI<font-awesome-icon icon="chevron-down" /> </a>
          <ul class="p-2 bg-primary">
            <RouterLink to="/sambutan"
              ><li><a>Sambutan</a></li></RouterLink
            >
            <RouterLink to="/visimisi"
              ><li><a>Visi Dan Misi</a></li></RouterLink
            >
            <RouterLink to="/guru"
              ><li><a>Guru Dan Tenaga Kependidikan</a></li></RouterLink
            >
            <RouterLink to="/download"
              ><li><a>Download</a></li></RouterLink
            >
          </ul>
        </li>
        <li tabindex="1">
          <a class="justify-between"
            >PROGRAM STUDI<font-awesome-icon icon="chevron-down"
          /></a>
          <ul class="p-2 bg-primary">
            <RouterLink to="/tkj"
              ><li><a>Teknik Komputer Jaringan</a></li></RouterLink
            >
            <RouterLink to="/multimedia"
              ><li><a>Multimedia</a></li></RouterLink
            >
            <RouterLink to="/jasaboga"
              ><li><a>Tata Boga</a></li></RouterLink
            >
            <RouterLink to="/perkantoran"
              ><li><a>Perkantoran</a></li></RouterLink
            >
            <RouterLink to="/akuntansi"
              ><li><a>Akuntansi</a></li></RouterLink
            >
          </ul>
        </li>
        <li tabindex="3">
          <a class="justify-between"
            >MEDIA & INFORMASI<font-awesome-icon icon="chevron-down"
          /></a>
          <ul class="p-2 bg-primary">
            <RouterLink to="/berita"
              ><li><a>Berita</a></li></RouterLink
            >
            <RouterLink to="/gallery"
              ><li><a>Galeri</a></li></RouterLink
            >
            <RouterLink to="/agenda"
              ><li><a>Agenda</a></li></RouterLink
            >
          </ul>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink to="/login"><a class="btn font-bold">LOGIN</a></RouterLink>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.navbar {
  color: #fff;
  padding: 0px !important;
}
</style>
