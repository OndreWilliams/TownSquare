window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const input = document.querySelector('input[type="search"]');
    input.onsearch = () => {
        console.log("The term searched for was " + input.value);

        document.getElementById('searchForm').submit();
        // await fetch(`/${input.value}`, {
        //     method: "POST",
        // }).then(res => {
        //     console.log("Request complete! response:", res);
        // });
    }

});
