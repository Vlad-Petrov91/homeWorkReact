export const gistsSelector = (state) => ({
   gists: state.gists.gists,
   gisError: state.gists.gisError,
   gistPending: state.gists.gistPending,
});


export const gistsByNameSelector = (state) => ({
   gistsByName: state.gists.gistsByName,
   gisByNameError: state.gists.gisByNameError,
   gistByNamePending: state.gists.gistByNamePending,
});