# CheckoutBot
To run detect.py and scan.py, place all files in the same folder.

- The detect.py is for machine vision, run with the following command:
```
python detect.py --weights best.pt --img 416 --conf 0.4 --source <path/to/image> --save-txt --view-img
```
- The scan.py is for barcode scanning, run with the following command:
```
python scan.py --source <path/to/image>
```
