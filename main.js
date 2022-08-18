const LinksSocialMedia = {
    github: 'franciscocosta4287',
    linkedin: 'francisco-costa',
    facebook: 'profile.php?id=100004530244747',
    instagram: 'Francis87253368',
    twitter:'Francis87253368'
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
  
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
  
  changeSocialMediaLinks()
  
  function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
      })
  }
  
  getGithubProfileInfos()