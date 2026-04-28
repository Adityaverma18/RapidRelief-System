

export const registerUser = async() =>{
    const {name, email, phoneNumber, password, confirmPassword, lat, lon} = req.body()

    //Basic Check

    if(!email && !password)
        return res.json(400).json({
            success: false,
            message : "Either email or phone Number has to fill"
        })

    if(!name || (!email && !phoneNumber) || !password || !confirmPassword)
        return res.status(400).json({
            success: false,
            message: "All the field are mandatory to fill"
        })

    if(password !== confirmPassword)
        return res.status(400).json({
            success : false,
            message: "Password and Confirm Password are not same"
        })
    
    let existingUser;

    if(phoneNumber)
        existingUser = await User.findOne

}