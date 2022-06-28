function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  } else {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
}

function themeCheck() {
  const userTheme = localStorage.getItem("theme")
  if (userTheme === "dark") {
    return true
  } else {
    return false
  }
}

export { toggleTheme, themeCheck }
