import React from 'react';

const EditForm = ( saveEdit, colorToEdit, setColorToEdit, setEditing ) => {
    return(
        <form onSubmit={saveEdit}>
        <legend>edit color</legend>

        <label>
          color name:
          <input
            value={colorToEdit.color}
            onChange={e =>
              setColorToEdit({ ...colorToEdit, color: e.target.value })
            } />
        </label>

        <label>
          hex code:
          <input
            value={colorToEdit.code.hex}
            onChange={e =>
              setColorToEdit({...colorToEdit, code: { hex: e.target.value }})
            } />
        </label>

        <div className="button-row">
          <button type="submit">save</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
      </form>
    )
}
export default EditForm;