<script>
    export let title;
    export let credit;
</script>

<div>
    <h1>{@html title}</h1>
    <hr />
    <p>{@html credit}</p>
</div>

<style>
	 h1 {
        all: unset;
        display: block;
        font-weight: 500;
		font-size: 40px;
		line-height: 50px;
	}

    hr {
        all: unset;
        display: block;
        box-sizing: border-box;
        border-bottom: 1px solid white;
        margin: 20px 0;
        width: 100px;
    }

    p {
        all: unset;
        display: block;
        font-family: var(--scrolly-sans);
        font-size: 18px;
        line-height: 24px;
    }
</style>