<script>
    export let title;
    export let credit;
</script>

<div>
    <span>
        <h1>{@html title}</h1>
        <p>{@html credit}</p>
    </span>
</div>

<style>
    div {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
    }

    span {
        margin: 20px;
    }

	 h1 {
        all: unset;
        display: block;
        font-weight: 500;
		font-size: 40px;
		line-height: 50px;
        margin: 20px 0;
	}

    p {
        all: unset;
        display: block;
        font-family: var(--scrolly-sans);
        font-size: 18px;
        line-height: 24px;
    }
</style>