export const fileUpload = async(file) => {

    if( !file ) throw new Error('No hay archivo para subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dx6awonea/upload';

    const formData = new FormData();
    formData.append( 'upload_preset', 'journalCloudReact' );
    formData.append( 'file', file );

    try {
        const response = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( !response.ok) throw new Error( 'No se pudo subir imagen' );

        const cloudResponse = await response.json();
        return cloudResponse.secure_url;

    } catch(error){
        throw new Error( error.message );
    }
}