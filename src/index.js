const renderCards = () => {
    const cardsContainer = document.querySelector(".cards")
  
    data.forEach(pokemon => {
      const card = document.createElement("li")
      card.classList.add("card")
  
      // Title
      const title = document.createElement("h2")
      title.classList.add("card--title")
      title.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      
      // Image
      const img = document.createElement("img")
      img.classList.add("card--img")
      img.src = pokemon.sprites.other["official-artwork"].front_default
      img.alt = `${pokemon.name} image`
  
      // Stats list
      const statsList = document.createElement("ul")
      statsList.classList.add("card--text")
  
      pokemon.stats.forEach(stat => {
        const statItem = document.createElement("li")
        statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
        statsList.appendChild(statItem)
      })
  
      // Extension "Appeared in" and image swap
      const gamesList = document.createElement("ul")
      gamesList.classList.add("card--games")
  
      const gamesTitle = document.createElement("h3")
      gamesTitle.textContent = "Appeared in Games:"
  
      pokemon.game_indices.forEach(game => {
        const gameItem = document.createElement("li")
        gameItem.textContent = game.version.name.toUpperCase()
        gamesList.appendChild(gameItem)
      })
  
      card.appendChild(title)
      card.appendChild(img)
      card.appendChild(statsList)
      
      card.appendChild(gamesTitle)
      card.appendChild(gamesList)
  
      // Add toggle functionality for the image
      let imageIndex = 0
      const images = [
        pokemon.sprites.other["official-artwork"].front_default,
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny
      ]
  
      img.addEventListener("click", () => {
        imageIndex = (imageIndex + 1) % images.length // Cycle through images
        img.src = images[imageIndex] ? images[imageIndex] : images[0]
      })
  
      cardsContainer.appendChild(card)
    })
  }
  

  renderCards()
  