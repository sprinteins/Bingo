<div class="grid-container">
    {#each bingoItems as  bingoItem , i}
        <div class="grid-item" contenteditable="true" on:input={makeHandleInput(i)}>
            <!-- <div class="text"> -->
                {bingoItem}
            <!-- </div> -->
        </div>
	{/each}
</div>

<script>
    import { onMount } from 'svelte';

    let bingoItems = [
        'Du bekommst ein gif per Teams geschickt',
        'Eins der Weeklies ist eine Themensammlung',
        'Jemand Fängts an zu sprechen und merkt nicht, dass sein Mikro stumm geschaltet ist',
        'Du musst über einen Witz Lachen',
        'Jemand ist in zwei Remote-Meetings gleichzeitig',
        'In deinem Termin hat mindestens einer als Hintergrundbild ein Foto des Büros',
        'Du findest einem Tippfehler im Code / einen Flüchtigkeitsfehler im Design',
        'Jemand sagt: "Sorry, due warst / ich war gerade kurz weg, kannst du das nochmal wiederholen?"',
        'Dir Begegnet ein "Muss man mal machen" - Kommentar im Code / Ein aufgeschobenes To-Do',
    ]

    let changedItems = [...bingoItems]

    function makeHandleInput(index){
        return function handleInput(event){
            // console.debug('🐞 event:',index, event.target.innerText)
            changedItems[index] = event.target.innerText;
            const items = JSON.stringify(changedItems);
            const value = btoa(items)

            const url = new URL(window.location);
            url.searchParams.set('items', value);
            window.history.pushState({}, '', url);
        }
        
    }

    onMount(() => {
        const url = new URL(window.location);
        const itemsJSONAndBase64Encoded = url.searchParams.get('items')
        if(!itemsJSONAndBase64Encoded){
            return;
        }
        
        const itemsJSON = atob(itemsJSONAndBase64Encoded)
        const items = JSON.parse(itemsJSON)
        bingoItems = items
        changedItems = [...bingoItems]
	});

    // function shuffle(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {

    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;

    //         // And swap it with the current element.
    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    // }

    // Used like so
    // shuffle(bingoItems);

</script>

<style>
    .grid-container{
        display: grid;
        height: 100%;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        /* grid-template-columns: repeat(3, minmax(200px, 1fr)) */
        /* grid-template-columns: 200px 200px 200px; */
        /* grid-template-rows: 200px 200px 200px; */
    }

    .grid-item {
        
        display: grid;
        place-items: center;
        text-align: center;
        background: white;
        border:1px solid black;
        padding: 2rem;
        box-shadow: 1rem 1rem 0px 0px #000000;
        
        text-transform: uppercase;
        font-weight: bold;
    }

    /* .grid-item:before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(1 * 100%);
    } */



</style>