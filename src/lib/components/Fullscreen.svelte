<script>
    import { onDestroy, onMount } from "svelte";

    export let fullscreen;
    export let close;
    export let open;

    function escape(e) {
        if (e.key === 'Escape') close();
    };

    onMount(() => document.addEventListener('keydown', escape));
    onDestroy(() => document.removeEventListener('keydown', escape));

    let closeEl;

    $: if (open) {
        closeEl?.focus();
    }
</script>

{#if fullscreen}
    <div class="button">
        <button class="close" on:click={close} bind:this={closeEl}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M26.3 24q-1 0-1.65-.65Q24 22.7 24 21.7v-12q0-.95.65-1.625T26.3 7.4q.95 0 1.625.675T28.6 9.7v6.5L40.25 4.6q.6-.65 1.575-.65t1.575.65q.65.6.65 1.575T43.4 7.75L31.8 19.4h6.5q.95 0 1.625.675T40.6 21.7q0 1-.675 1.65-.675.65-1.625.65ZM4.6 43.4q-.65-.6-.65-1.575t.65-1.575l11.65-11.7h-6.5q-1 0-1.65-.65-.65-.65-.65-1.65 0-.95.65-1.6.65-.65 1.65-.65H21.7q1 0 1.65.65.65.65.65 1.65v11.95q0 1-.65 1.65-.65.65-1.6.65-1 0-1.65-.65-.65-.65-.65-1.65v-6.5L7.75 43.4q-.6.65-1.575.65T4.6 43.4Z"/></svg>
        </button>
    </div>
{:else}
    <button class="open" on:click={open}>
        <div class="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39.3q-1 0-1.65-.65Q8.7 38 8.7 37v-7.25q0-.9.675-1.575Q10.05 27.5 11 27.5q1 0 1.625.675t.625 1.575v5h5q.9 0 1.575.625Q20.5 36 20.5 37t-.675 1.65q-.675.65-1.575.65Zm0-18.8q-1 0-1.65-.675-.65-.675-.65-1.625V11q0-1 .65-1.675T11 8.65h7.25q.9 0 1.575.7.675.7.675 1.6 0 1.05-.675 1.675t-1.575.625h-5v4.95q0 .95-.625 1.625T11 20.5Zm18.8 18.8q-.95 0-1.625-.675T27.5 37q0-1 .675-1.625t1.625-.625h4.95v-5q0-.9.65-1.575.65-.675 1.6-.675 1 0 1.675.675t.675 1.575V37q0 1-.675 1.65Q38 39.3 37 39.3Zm7.25-18.8q-1.05 0-1.675-.675T34.75 18.2v-4.95H29.8q-.95 0-1.625-.65T27.5 11q0-1 .675-1.675T29.8 8.65H37q1 0 1.675.675T39.35 11v7.2q0 .95-.7 1.625t-1.6.675Z"/></svg>
        </div>
    </button>
{/if}
<style>
    button.open  {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: transparent;
        border: unset;
        z-index: 2;

        background: linear-gradient(transparent,  black) ;
    }

    button.close {
        color: white;
        border: unset;
        background-color: transparent;
        display: flex;
        margin: unset;
        padding: unset;
    }

    svg {
        fill: white;
        transform: scale(.7);
    }

    .button {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 2px;
        border-radius: 50%;
        display: flex;
        border: 3px solid white;
    }

    .button:focus-within {
        border-color: #34a1f7;
    }

</style>