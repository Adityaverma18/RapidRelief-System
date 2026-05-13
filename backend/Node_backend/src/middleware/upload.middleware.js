import multer from "multer";


// 🔹 storage config
const storage =
  multer.diskStorage({

    destination:
      function (req, file, cb) {

        cb(null, "src/uploads/");
      },

    filename:
      function (req, file, cb) {

        const uniqueName =
          Date.now() +
          "-" +
          file.originalname;

        cb(null, uniqueName);
      }
});


// 🔹 file filter
const fileFilter =
  (req, file, cb) => {

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png"
    ];

    if (
      allowedTypes.includes(
        file.mimetype
      )
    ) {

      cb(null, true);

    } else {

      cb(
        new Error(
          "Only PDF/JPG/PNG allowed"
        ),
        false
      );
    }
};


// 🔹 upload middleware
export const upload =
  multer({

    storage,

    fileFilter,

    limits: {
      fileSize:
        5 * 1024 * 1024 // 5MB
    }

});