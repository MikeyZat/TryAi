## Welcome to TryAi!

Check our quick tutorial below or choose a section from the menu on your left to play with the AI right away!

If you are further interested in this topic you should check:

- [Jupyter notebooks]() - see how our models were created.
- [Source code on github]() - see how our site was built.

## TryAI Quick start

This short introduction uses **Tensorflow** + **TensorflowJS** to:

1. Build neural network model in Tensorflow Python API
2. Save model and convert to JSON format
3. And, finally, evaluate the model at our website!

---

Download and install **Tensorflow** + **TensorflowJS**

```bash
pip install tensorflow tensorflowjs
```

**REMEMBER**  
Check the input size of your model at our website! In handwritten model we use 28 x 28 image with 1 color channel, so your model has to have [28, 28, 1] input size.

TODO HERE PUT IMAGE WHERE TO FIND INPUT SIZE!

Firstly, let's focus on python implementation of our very simple handwritten number classificator. Full code is available in _handwritten.ipnyb_ [TODO FILE LINK].

```python3
# Python 3
import tensorflow as tf
from tensorflow.keras import datasets, layers, models, losses
from tensorflow.keras.datasets import mnist
from keras.utils import np_utils
(x_train, y_train), _, _ = mnist.load_data()
x_train = x_train / 255.0
x_train = x_train.reshape(-1, 28, 28, 1)
y_train = np_utils.to_categorical(y_train)
input_shape, num_classes = (28, 28, 1), 10
model = models.Sequential([
    layers.Flatten(input_shape=(28, 28, 1))
    layers.Dense(32, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])
model.compile(optimizer='adam', loss=losses.CategoricalCrossentropy(from_logits=True), metrics=['accuracy'])
model.fit(x_train, y_train, epochs=2, batch_size=8)
```

Save model to _h5_ format

```python3
# Python3
model.save("model.h5")
```

Convert model to _JSON_ format

```bash
# bash
tensorflowjs_converter --input_format keras model.h5
```

Import model to our website

[TODO WHERE TO IMPORT GIF]

Test model

[TODO TEST MODEL GIF

---
