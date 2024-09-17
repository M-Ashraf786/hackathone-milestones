const button = document.getElementById("button") as HTMLButtonElement
      const skills = document.getElementById("hide") as HTMLElement
      button.addEventListener("click", () => {
        if (skills.style.display === "block") {
          skills.style.display = "none";
        } else {
          skills.style.display = "block";
        }
      });