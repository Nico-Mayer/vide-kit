<script>
  import { toggleTheme } from "./composables/darkMode"
  import { isDark } from "$lib/stores/dark"
  import { page } from "$app/stores"

  let isOpen = false
  $: openClass = isOpen ? "flex flex-col" : "hidden"
  $: currRoute = $page.url.pathname

  const menuLinks = [
    {
      title: "about",
      icon: "i-carbon-account icon-btn",
      url: "/content/about",
    },
    {
      title: "github",
      icon: "i-simple-icons-github icon-btn",
      url: "https://github.com/Nico-Mayer",
    },
  ]

  function handleClick() {
    toggleTheme()
    $isDark = !$isDark
  }
</script>

<nav class="shadow-sm flex px-4 md:px-8 items-center justify-between h-18">
  <!--  LOGO -->
  <a
    on:click={() => (isOpen = !isOpen)}
    href="/"
    class:text-red-500={currRoute === "/"}
  >
    <div class="i-simple-icons-svelte icon-btn text-[28px]" />
  </a>

  <div class="flex">
    <!-- DESKTOP MENU -->
    <div class="md:flex hidden space-x-8">
      {#each menuLinks as link}
        <a
          on:click={() => (isOpen = false)}
          href={link.url}
          class:text-red-500={currRoute === link.url}
        >
          <div class={`${link.icon}`}>{link.title}</div>
        </a>
      {/each}
    </div>

    <!-- THEME TOGGLE -->
    <button on:click={handleClick}>
      <div
        class="dark:i-carbon-sun i-carbon-moon icon-btn mr-4 md:(ml-8 mr-0)"
      />
    </button>

    <!-- MOBILE MENU -->
    <button on:click={() => (isOpen = !isOpen)}>
      <div class="i-carbon-menu md:hidden icon-btn text-[28px]" />
    </button>
  </div>
</nav>

<div
  class={"md:hidden z-10 items-center bg-warm-gray-200 dark:bg-cool-gray-700 w-screen " +
    openClass}
>
  {#each menuLinks as link, index}
    <a
      href={link.url}
      class="border-b border-black/20 dark:border-white/20 w-full text-center p-4"
      class:border-t={index === 0}
    >
      <div class="flex justify-center">
        <div class={link.icon} />
        <span class="ml-4">{link.title}</span>
      </div>
    </a>
  {/each}
</div>
