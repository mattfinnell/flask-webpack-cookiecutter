def get_classes_of_type(module, class_type):
    """ Within a module, there can be many class definitions. This filters all
    classes within a module that inherit from class_type. Useful for getting
    all blueprints from a views module, or orm objects from a models module.
    """
    object_names = filter(
        lambda x: issubclass(type(getattr(module, x)), class_type),
        module.__dict__
    )

    return [getattr(module, object_name) for object_name in object_names]
