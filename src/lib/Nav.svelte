<script>
  import { toggleTheme } from "./composables/darkMode"
  import { isDark } from "../stores/dark"
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

<nav
  flex="~"
  h="18"
  p="x4 md:x8"
  items="center"
  justify="between"
  class="shadow-sm"
>
  <!--  LOGO -->
  <a
    on:click={() => (isOpen = !isOpen)}
    href="/"
    class:text-red-500={currRoute === "/"}
  >
    <div class="i-simple-icons-svelte icon-btn" text="28px" />
  </a>

  <div flex="~ row">
    <!-- DESKTOP MENU -->
    <div flex="md:~" hidden="~" space="x8">
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
        class="dark:i-carbon-sun i-carbon-moon icon-btn"
        m="r4 md:l8 md:r0"
      />
    </button>

    <!-- MOBILE MENU -->
    <button on:click={() => (isOpen = !isOpen)}>
      <div class="i-carbon-menu md:hidden icon-btn" text="28px " />
    </button>
  </div>
</nav>

<div
  items="center"
  bg="warm-gray-200 dark:coolgray-700"
  w="screen "
  class={"md:hidden z-10 " + openClass}
>
  {#each menuLinks as link, index}
    <a
      href={link.url}
      class="border-b border-black/20 dark:border-white/20 w-full text-center p-4"
      class:border-t={index === 0}
    >
      <div flex="~" justify="center">
        <div class={link.icon} />
        <span class="ml-4">{link.title}</span>
      </div>
    </a>
  {/each}
</div>
