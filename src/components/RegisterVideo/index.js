import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target)
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({});
        }

    };

}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frostpunk", url: "https://youtube.com" }
    });
    const [formVisivel, setFormVisivel] = React.useState(true)
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Título do Vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL do Vídeo"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            ) : null
            }

        </StyledRegisterVideo >
    )
}