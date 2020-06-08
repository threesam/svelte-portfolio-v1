<script>
  export let content

  const stringToHTML = function (str) {
    const dom = document.createElement('div')
    dom.innerHTML = str
    console.log(dom)
    return dom
  }
</script>

<style>

</style>

<div class="bg1">
  {stringToHTML(content)}
  <a href="https://google.com">Google</a>
</div>
