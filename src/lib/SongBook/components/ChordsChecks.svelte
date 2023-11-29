<script lang="ts">
    export let lastChordsCheck: any;
</script>

<div>
    <h3>Urls checks</h3>
    {#if !lastChordsCheck}
        <span>Could not retrieve checks</span>
    {:else}

        <table>
            <tr>
                <th>Checks</th>
                <th>Skipped</th>
                <th>Errors</th>
            </tr>
            <tr>
                <td>{lastChordsCheck.nbChecks}</td>
                <td>{lastChordsCheck.nbSkipped}</td>
                <td>{lastChordsCheck.nbFails}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Status</th>
                <th>Ref</th>
                <th>Url</th>
                <th>Data</th>
            </tr>
            {#each lastChordsCheck.fails as failure}
                <tr>
                    <td>{failure.status}</td>
                    <td>{failure.chord.artist} - {failure.chord.title}</td>
                    <td>{failure.chord.url}</td>
                    <td>{failure.error ? JSON.stringify(failure.error) : ''}</td>
                </tr>
            {/each}
        </table>
    {/if}
</div>
