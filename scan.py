import cv2
from pyzbar.pyzbar import decode
import argparse


# Make one method to decode the barcode
def BarcodeReader(source):
    # read the image in numpy array using cv2
    img = cv2.imread(source)

    # Decode the barcode image
    detectedBarcodes = decode(img)

    # If not detected then print the message
    if not detectedBarcodes:
        print("Barcode Not Detected or your barcode is blank/corrupted!")
    else:

        # Traverse through all the detected barcodes in image
        for barcode in detectedBarcodes:

            # Locate the barcode position in image
            (x, y, w, h) = barcode.rect

            # Put the rectangle in image using
            # cv2 to heighlight the barcode
            cv2.rectangle(img, (x - 10, y - 10),
                          (x + w + 10, y + h + 10),
                          (255, 0, 0), 2)

            if barcode.data != "":
                # Print the barcode data
                print(barcode.data.decode('UTF-8'))
                print(barcode.type)
            else:
                print("Barcode is not detected! Using Machine Learning to Identify...")

    cv2.imshow("Image", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


def parse_opt():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', type=str, help='path to image source')
    opt = parser.parse_args()
    return opt


def main(opt):
    BarcodeReader(**vars(opt))


if __name__ == "__main__":
    opt = parse_opt()
    main(opt)